import type { Rule } from 'ant-design-vue/es/form';

export const rulesUsername = async (_rule: Rule, value: string) => {
    if ((value === "")) {
        return Promise.reject('账号不能为空');
    } else {
        const reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
        if (!reg.test(value)) {
            return Promise.reject('字母开头，6~18字节，仅允许字母、数字和下划线');
        }
        return Promise.resolve();
    }
};
export const rulesPassword = async (_rule: Rule, value: string) => {
    if ((value === "")) {
        return Promise.reject('密码不能为空');
    } else {
        const reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
        if (!reg.test(value)) {
            return Promise.reject('字母开头，6~18字节，仅允许字母、数字和下划线');
        }
        return Promise.resolve();
    }
};