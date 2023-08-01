import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { Playbook } from '..';

describe('playbook', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('playbook init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <Playbook />;
        };
      },
    });

    // todo
  });
});
