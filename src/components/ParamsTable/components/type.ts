export type NewRequestColumn = {
  paramName: string;
  required: '是' | '否';
  type: 'int' | 'string' | 'boolean' | 'double' | 'long' | 'object';
  description?: string;
};
export type NewResponseColumn = {
  paramName: string;
  type: 'int' | 'string' | 'boolean' | 'double' | 'long' | 'object';
  description?: string;
};
