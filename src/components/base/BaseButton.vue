<template>
  <button 
    :class="['base-button', `base-button--${type}`, `base-button--${size}`, { 'is-disabled': disabled, 'is-loading': loading }]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="loading-icon">⏳</span>
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'success', 'warning', 'danger'].includes(value),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fff;
  color: #606266;
}

.base-button:hover:not(.is-disabled):not(.is-loading) {
  opacity: 0.8;
}

.base-button--small {
  padding: 6px 12px;
  font-size: 12px;
}

.base-button--large {
  padding: 12px 20px;
  font-size: 16px;
}

.base-button--primary {
  background-color: #409eff;
  color: #fff;
  border-color: #409eff;
}

.base-button--success {
  background-color: #67c23a;
  color: #fff;
  border-color: #67c23a;
}

.base-button--warning {
  background-color: #e6a23c;
  color: #fff;
  border-color: #e6a23c;
}

.base-button--danger {
  background-color: #f56c6c;
  color: #fff;
  border-color: #f56c6c;
}

.base-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.base-button.is-loading {
  cursor: wait;
}

.loading-icon {
  margin-right: 4px;
}
</style>
