import { views } from "@assets/settings.json";
import AboutSections from '@/components/compositions/AboutSections.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from "./About.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'AboutSections', typeof __VLS_localComponents, "AboutSections", "AboutSections", "AboutSections">;
__VLS_components.AboutSections;
// @ts-ignore
[AboutSections,];
for (const [section, index] of __VLS_getVForSourceType((__VLS_ctx.views.about.sections)!)) {
{
let __VLS_0!: 'AboutSections' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.AboutSections : (typeof __VLS_resolvedLocalAndGlobalComponents)['AboutSections'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, key: ((`${section.type}-${index}`)), section: ((section)), }));
({} as { AboutSections: typeof __VLS_0; }).AboutSections;
const __VLS_2 = __VLS_1({ ...{}, key: ((`${section.type}-${index}`)), section: ((section)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, key: ((`${section.type}-${index}`)), section: ((section)), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
// @ts-ignore
[views,];
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
