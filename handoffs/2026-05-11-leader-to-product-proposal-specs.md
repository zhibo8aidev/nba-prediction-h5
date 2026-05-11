# Handoff

- Project: `nba-prediction-h5`
- Current stage: `proposal_specs`
- From owner: `leader`
- To owner: `product`
- Owner agent/session: `待分配`

## Approved inputs
- `artifacts/source-prd/prd.md`
- `artifacts/source-design/design-spec.md`

## New artifacts expected
- `artifacts/proposal.md`
- `artifacts/specs/product-spec.md`
- `artifacts/specs/technical-notes.md`（如需）
- product -> leader 的 proposal_specs handoff

## Scope notes
- 项目目标是交付一个嵌入直播吧场景的 NBA 预测 H5，覆盖赛事信息展示、大小分竞猜、登录拦截、提交弹窗、抽奖告知、AB 实验分组展示，以及专家 / AI / 球迷观点内容编排。
- 视觉方向已明确为高亮、通透、浅蓝底的移动端 H5 沉浸式页面。
- 现阶段设计规范仅作为 source input，不能替代后续 `design.md` 与高保真 mockups 的正式评审产物。

## Open questions to resolve in proposal/specs
- AB 实验分组的分流依据、曝光口径、埋点口径与实验关闭策略
- 登录态接入方式、未登录跳转链路、站内信/短信依赖边界
- 专家/AI/球迷头像与文案的数据来源、后台配置方式、回收机制
- 提交后抽奖资格判定、开奖时机、中奖名单与收货信息流转方式
- 比赛、盘口、截止时间的实时数据来源与容错策略

## Summary
leader 已完成项目建档与 source inputs 归档，现交由 product 生成 proposal/specs，供后续 PRD 审核与设计阶段使用。
