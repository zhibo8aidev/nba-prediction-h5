# Technical Notes - NBA预测 H5

## 1. 技术方向
- 前端：H5 / mobile-web，运行于直播吧 App WebView 或外部 H5 容器
- 设计产物：HTML 高保真 mockups
- 后端职责：比赛与盘口读取、分组分配、预测记录写入、结果结算字段回写
- 页面主宽度以 `390px` 视觉基线适配移动端

## 2. 前端实现重点
### 2.1 页面状态
需要管理以下状态：
- 比赛数据加载状态
- 用户登录态
- 当前实验组信息
- 盘口选中状态
- 已提交状态
- 意愿弹窗状态
- 提交成功弹窗状态

### 2.2 提交防重
- 同一用户同一比赛仅允许提交一次
- 前端需在接口返回已提交时恢复锁定 UI
- 提交按钮应具备 loading 与重复点击防抖

### 2.3 动态内容渲染
- 根据实验组动态渲染专家、AI、球迷信息
- 长文案需要支持折行与稳定排版，不得压坏卡片高度
- 弹窗名称应由当前实验组的主展示角色映射生成

### 2.4 视觉落地点
- 顶部 KV 需按比例缩放展示，避免裁掉主标题与篮球场主体
- `body` 与容器底色需与头图底部浅蓝色对齐
- 卡片与头图间采用负边距层叠
- 提交按钮、选项按钮、弹窗均按浅色高亮体系实现

## 3. 推荐接口边界
### 3.1 页面初始化接口
建议返回：
- match_id
- home_team / away_team
- team_icon_urls
- cutoff_time
- line_value
- experiment_group
- experiment_code
- content_payload（专家 / AI / 球迷内容）
- user_submit_status
- user_previous_selection

### 3.2 提交接口
建议入参：
- match_id
- uid
- experiment_group
- experiment_code
- selected_option
- line_value
- continue_receive_analysis
- displayed_primary_role_name
- displayed_assistant_role_name
- client_env

建议返回：
- submit_success
- locked_status
- message

### 3.3 结算 / 查询接口
建议提供：
- 查询单用户单比赛提交记录
- 比赛结束后回写命中结果
- 后续抽奖与通知系统消费所需的最小字段

## 4. AB 实验实现建议
- 分组应在服务端完成，保证一致性与可追溯性
- 分组粒度建议为 `uid + match_id`
- 页面展示与提交埋点都要带 `experiment_group / experiment_code`
- control 组需明确不展示分析模块，以便形成对照组

## 5. 埋点建议
至少埋点：
- 页面曝光
- 专家模块曝光
- AI 模块曝光
- 球迷模块曝光
- 盘口选择
- 提交按钮点击
- 意愿弹窗曝光
- 意愿选择结果
- 提交成功弹窗曝光
- 已提交态曝光

## 6. 后端与业务依赖
### 6.1 待确认依赖
- 比赛与盘口数据源
- 用户登录与 UID 获取方式
- 命中结算来源
- 短信 / 站内信通知系统对接方式
- 抽奖资格与奖品履约系统边界

### 6.2 建议最小化范围
- 本期 H5 与后端仅负责展示、分组、提交、记录与结果字段沉淀
- 抽奖执行、通知发送、收货信息补录可作为外部依赖系统，不要求在本期 H5 内闭环开发

## 7. 测试关注点
- 未登录与已登录链路切换是否正常
- 同一用户重复提交是否被正确拦截
- 各实验组展示内容是否与配置一致
- control 组是否正确隐藏分析模块
- 意愿弹窗名称是否与当前组展示角色一致
- 长文案在 390px 宽度下是否稳定显示
- 页面在弱网下是否避免重复提交与状态错乱

## 8. 设计执行输入
- `artifacts/source-prd/prd.md`
- `artifacts/source-design/design-spec.md`
- `artifacts/source-design/chat-screenshot-notes-2026-05-11.md`
- `artifacts/source-design/hero-kv.md`
- `artifacts/source-design/assets/hero-kv.jpg`

## 9. 当前结论
- proposal/specs 已可进入 `prd_review`
- 评审通过后，设计阶段需使用 Gemini 基于当前 PRD、设计规范与头图素材产出 HTML 高保真 H5 mockups
- 设计阶段应优先验证 390px 宽度下的头图承接、卡片层叠、长文案展示与弹窗质感
