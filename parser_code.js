let externalComment, externalCommentFromLogic, elementScoreName, elementScoreNameFromLogic;
if (elementScoreLogics && elementScoreLogics?.length > 0) {
  const lastIndex = elementScoreLogics?.slice().reverse().findIndex(item => item?.externalComment);
  const lastIndexValue = lastIndex >= 0 ? elementScoreLogics?.length - 1 - lastIndex : -1;
  if (elementScoreLogics && elementScoreLogics.length > 0) {
    for (let syntax = 0; syntax < elementScoreLogics?.length; syntax++) {
      let fetchValues;
      let childSyntax = elementScoreLogics[syntax]?.logicSyntax
      if (childSyntax && childSyntax != "") {
        fetchValues = evaluateLogic(childSyntax, responses);
      }
      externalCommentFromLogic = fetchValues ? elementScoreLogics[syntax]?.externalComment : ""
      elementScoreNameFromLogic = fetchValues ? elementScoreLogics[syntax]?.elementScoreName : ""
      if (externalCommentFromLogic && externalCommentFromLogic != "" && elementScoreNameFromLogic && elementScoreNameFromLogic != "") {
        break;
      }
    }
    if (externalCommentFromLogic && externalCommentFromLogic != "" && elementScoreNameFromLogic && elementScoreNameFromLogic != "") {
      externalComment = externalCommentFromLogic;
      elementScoreNameFromLogic = elementScoreNameFromLogic
      elementScoreName = elementScoreNameFromLogic
    } else if (elementScoreLogics[lastIndexValue]?.externalComment && elementScoreLogics[lastIndexValue]?.externalComment != "") {
      externalComment = elementScoreLogics[lastIndexValue]?.externalComment
      elementScoreName = elementScoreLogics[lastIndexValue]?.elementScoreName
    } else {
      externalComment = rule.externalComment.unMet ? rule.externalComment.unMet : ""
      elementScoreName = "Unmet"
    }
  }
} else {
  console.log("Logic syntax not found", error)
}

// Function to evaluate logic
function evaluateLogic(logic, responses) {
  if (logic.equals) {
    const [key, expectedValue] = logic.equals;
    const actualValue = responses[key.toUpperCase()] || '';
    return actualValue.toUpperCase() === expectedValue.toUpperCase();
  } else if (logic.notEquals) {
    const [key, expectedValue] = logic.notEquals;
    const actualValue = responses[key.toUpperCase()] || '';
    return actualValue.toUpperCase() !== expectedValue.toUpperCase();
  } else if (logic.and) {
    return logic.and.every(subLogic => evaluateLogic(subLogic, responses));
  } else if (logic.or) {
    return logic.or.some(subLogic => evaluateLogic(subLogic, responses));
  } else if (logic.atLeastCount) {
    const { minCount, attributes } = logic.atLeastCount;
    const trueCount = attributes.filter(attribute => evaluateLogic(attribute, responses)).length;
    return trueCount >= minCount;
  } else if (logic.if) {
    const { equals, greaterThanOrEqual, or, and } = logic.if;
    if (equals) {
      const [key, expectedValue] = equals;
      const actualValue = responses[key.toUpperCase()] || '';
      return actualValue.toUpperCase() === expectedValue.toUpperCase();
    } else if (greaterThanOrEqual) {
      const [key, value] = greaterThanOrEqual;
      const actualValue = parseFloat(responses[key.toUpperCase()]);
      return actualValue >= value;
    } else if (or) {
      return or.some(subLogic => evaluateLogic(subLogic, responses));
    } else if (and) {
      return and.every(subLogic => evaluateLogic(subLogic, responses));
    }
  } else if (logic.atLeastCountMultiSelect) {
    const { minCount, attributes } = logic.atLeastCountMultiSelect;
    const [key] = attributes[0].in; // Extract the response key dynamically
    const actualValue = responses[key.toUpperCase()] || '';

    // Check if the response contains ';;' and split dynamically
    const selectedValues = actualValue.includes(';;')
      ? actualValue.split(';;').map(value => value.trim())
      : [actualValue.trim()];

    let predefinedValues = attributes[0].in[1]; // Extract predefined values
    predefinedValues = predefinedValues?.length > 0 ? predefinedValues.map(value => value.toUpperCase()) : predefinedValues
    const matchedCount = selectedValues.filter(value => predefinedValues.includes(value)).length;
    return matchedCount >= minCount;
  }
  return false;
}