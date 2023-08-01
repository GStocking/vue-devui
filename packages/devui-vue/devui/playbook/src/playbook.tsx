import { defineComponent, toRefs } from 'vue';
import type { SetupContext } from 'vue';
import { playbookProps, PlaybookProps } from './playbook-types';
import './playbook.scss';

export default defineComponent({
  name: 'DPlaybook',
  props: playbookProps,
  emits: [],
  setup(props: PlaybookProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);

    return () => {
      return (
        <div class="devui-playbook">这是我新建的playbooks</div>
      );
    };
  }
});
