<template>
  <div>
    <d-button-group>
      <d-button variant="solid">
        按钮名称
      </d-button>
      <d-button
        icon="icon-select-arrow"
        variant="solid"
      />
    </d-button-group>

    <p>尺寸：sm</p>
    <d-button-group size="sm">
      <d-button
        color="primary"
        variant="solid"
      >
        上海
      </d-button>
      <d-button>北京</d-button>
      <d-button>深圳</d-button>
    </d-button-group>

    <p>尺寸：默认</p>
    <d-button-group>
      <d-button color="primary">
        上海
      </d-button>
      <d-button>北京</d-button>
      <d-button>深圳</d-button>
    </d-button-group>

    <p>尺寸：lg</p>
    <d-button-group size="lg">
      <d-button color="primary">
        上海
      </d-button>
      <d-button>北京</d-button>
      <d-button>深圳</d-button>
    </d-button-group>

    <p>与dropdown下拉菜单一起使用</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const position = ref(["bottom-start", "top-start"]);
</script>
