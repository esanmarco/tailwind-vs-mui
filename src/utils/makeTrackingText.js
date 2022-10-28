import kebabCase from "lodash.kebabcase";

export const makeTrackingText = ({ taggingPrefix = "", component, element }) =>
  kebabCase(
    `${taggingPrefix && `${taggingPrefix}-`}ui-kit-${component}-${element}`
  );

export default makeTrackingText;
