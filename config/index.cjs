/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3ac90fed63567b4e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '21e2702537b4b8732986e82ff85d6247',

  PROVINCE: '湖南',
  CITY: '郴州市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '紫奕',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owYNv5yJb4ldC9YrDCfRMWZyaFwA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'nalmCTZ9XyTW7xGXyjNLmPxo70DxjbkQsZmCEtATjZI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2001', date: '09-07',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-06-04' },
        // kaoyan日
        { keyword: 'marry_day', date: '2023-12-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'HCr03cvzjzV44jdkpOH3zcRpkQqnap_tQgzr5H0x2c0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owYNv504Yu6VniFd_Qr9gVlmjs0I',
    }
  ],

}

module.exports = USER_CONFIG

