import type { PropType, ExtractPropTypes } from 'vue';

export const playbookProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type PlaybookProps = ExtractPropTypes<typeof playbookProps>;
