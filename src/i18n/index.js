// src/i18n/index.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    toggleLanguage: '切换到中文版',
    tabs: {
      home: 'Home',
      contact: 'Contact',
      // fees: 'Participation Fees',
      venue: 'Venue',
      //schedule: 'Forum Schedule',
      registration: 'Registration',
    },
    home: {
      title: '2025 PKU Undergraduate Astronomy Symposium',
      content: [
        'The PKU Undergraduate Astronomy Symposium is scheduled to be held on September 26, 2025. This symposium will take place both at the Kavli Institute for Astronomy and Astrophysics at Peking University and online via Tencent Meeting.',
        'The PKU Undergraduate Astronomy Symposium (PKU-UAS) is an annual event organized by the Department of Astronomy and the Kavli Institute for Astronomy and Astrophysics at Peking University. It provides a unique platform for exchanging scientific knowledge and demonstrating academic achievements,fostering communication and collaboration among undergraduates. All undergraduate students and new graduate students in 2025, regardless of whether they are from Peking University, are invited to attend and present their research findings. Students from other universities are particularly welcome.The faculty members of KIAA and DoA as well as our guest professors will also introduce their research fields and ongoing projects to the students. Those students with best performances in this symposium will be award Linbridge Scholarship. In memory of his father Prof. Paul Ta Guang Lin (林达光), a famous patriotic overseas Chinese, Prof. Douglas N C Lin set up Linbrige Fund in 2010, aiming at promoting astronomical and astrophysical researches and communications among young students, and encouraging young undergraduates to pursue their dreams in astronomy and astrophysics.',
        'Astronomy in China has developed at a fast rate over the last decade, with new observational instrument and facilities planned or already operational (e.g., FAST, MUST, CSST, TianQin, Taiji, LHAASO), and increasing funding opportunities available. The KIAA postdoc forum is a chance for early-career scientists to grow their scientific network in China, with the prospect of continuing their scientific careers or further collaborating with Chinese institutions.'
      ],
      list_1_title: '1. Symposium Date and Format:',
      list_1: [
        'This year\'s symposium is scheduled on <b>September 26, Friday</b>. Participants will have 10-15 min to present their research results in Chinese (with powerpoint/beamer in English) and answer the questions from the audience. The symposium will be concluded with the award of Linbridge Scholarship. The top 20% of the speakers in the symposium will be awarded the first prize, followed by the second prize to the next 30% of the participants. For all the other 50% participants will be awarded with the Excellent prize. The main award criteria are scientific contents, research meaning and the scientific presenting skills.'
      ],
      bannerText: [
        '2025 PKU Undergraduate Astronomy Symposium',
        'September 26 , 2025'
      ],
      list_2_title: '2. Participation Criteria:',
      list_2: [
        'Undergraduates from any university or graduate students of the class of 2025 who are interested in presenting their astronomical research findings are welcome to attend.'
      ],
      list_3_title: '3. Symposium Registration Time and Method:',
      list_3: [
        'Registration for the 2025 PKU Undergraduate Astronomy Symposium is now open. We encourage all students to actively participate. Please prepare the following:',
        '(1). Register for the symposium and submit your presentation title and abstract.',
        '(2). Prepare a computer for the presentation, install the Tencent Meeting client, and test the screen sharing and audio/video functions in advance.',
        '(3). Prepare a presentation PPT (PPT in English, presentation in Chinese), with a duration of approximately 10 minutes (subject to further notice).',
        '(4). After registration, please pay attention to subsequent email notifications.'
      ]
    },
    registration: {
      title: 'Registration',
      content: [
        'Registration for the 2025 PKU Undergraduate Astronomy Symposium',
        ['Symposium Homepage:', 'https://undersymp25.kiaa-pku.cn'],
        'Symposium Date and Time: September 26, 2025, 13:00 - 19:10',
        'Meeting platform: Tencent Meeting',
        'Registration Period: July 30th, 2025 to September 5th, 2025',
        ['Registration Website:', 'https://www.wjx.top/vm/ekxIk52.aspx'],
        'Registration QR Code:',
      ],
    },
    contact: {
      title: 'Contact',
      content: [
        'All information regarding the symposium can be found on the website:',
        ['https://undersymp25.kiaa-pku.cn'],
        'If you have any questions, or need visa application support, please contact: ',
        // 将联系人信息作为数组
        ['Jing Xie (谢静), email: xiejing5166@pku.edu.cn; Tel: 010-62751134',
          'Yacheng Kang(康亚城),email:yckang@stu.pku.edu.cn',
          'Jiahang Zhong(钟佳航),email:2300011601@stu.pku.edu.cn',
          'Yunsheng Ge(葛运生),email:2300011620@stu.pku.edu.cn'],
        'We are looking forward to meeting you at 2025 PKU Undergraduate Astronomy Symposium!',
      ],
    },
    fees: {
      title: 'Participation Fee',
      content: [],
    },
    venue: {
      title: 'Venue Information',
      content_1: 'This forum will take place at the Kavli Institute for Astronomy and Astrophysics at Peking University (KIAA-PKU), Yiheyuan Road 5, Haidian District, Beijing, China. To get further information, please pay attention to follow-up notifications. A PKU campus map showing the location of KIAA can be accessed here:',
      content_2: 'A PKU campus map showing the location of KIAA can be accessed here:',
      content_3: 'A map showing the location of PKU is here:',
      link_2: 'http://kavli.pku.edu.cn/visitor-info/maps',
      link_3: 'http://kavli.pku.edu.cn/sites/default/files/Visit_Info/images/pku_map_direction.pdf',
      hotel: 'Hotels around Peking University:',
      hotel_link: '/hotels_en.pdf',
      hotel_link_text: 'Download Information'
    },
    schedule: {
      subTitle: 'Preliminary Schedule:',
      schedule: [
        'Monday (November 25): Invited talks, discussion, poster session',
        'Tuesday (November 26): Invited talks, discussion, poster session',
        'Wednesday (November 27): Invited talks, discussion, poster session'
      ]
    }
    // ... 其他翻译内容
  },
  zh: {
    toggleLanguage: 'Switch to English Version',
    tabs: {
      home: '首页',
      contact: '联系方式',
      // fees: '参会费用',
      venue: '会场',
      // schedule: '论坛日程',
      registration: '注册方式',
    },
    home: {
      title: '2025年北京大学本科生天文学术研讨会',
      content: [
        '北京大学本科生天文学术研讨会定于2025年9月26日召开，本次研讨会将在北京大学科维理天文与天体物理研究所和线上腾讯会议同步举办。',
        '北京大学本科生天文学术研讨会是北京大学天文学系和科维理天文与天体物理研究所举办的年度本科生学术研讨会，旨在推动天文专业本科生的学术研究和学术交流，为本科生提供展示、交流和合作的平台。无论你来自哪所学校，身处哪个院系，只要你是本科学生（包括本届毕业生），并且有自己的天文学研究成果，都可以报名参加本次学术研讨会。北大天文学系和科维理所的老师也会参与其中，对报告作出点评，最终评选出林桥奖学金得主。2010年，北京大学科维理天文与天体物理研究所首任所长林潮教授（Douglas Nelson Chao Lin）捐赠36,547.00美元成立林桥基金（Linbridge Fund），以纪念其父亲林达光（Paul Ta Kuang Lin）先生一生为建立中国与其它国家之间的桥梁而做出的贡献。该基金用于支持北大学生进行天文与天体物理学方面的学术研究和交流。林潮教授希望通过此基金奖励在学术研讨会上表现优秀的同学，同时也激励大家坚持追逐自己的天文梦想。'
      ],
      list_1_title: '1. 研讨会举办时间与形式：',
      list_1: [
        '今年的学术研讨会将于9月26日（星期五）在北京大学科维理天文与天体物理研究所和线上腾讯会议同步举办。作报告的同学需要用中文展示自己的研究成果（要求ppt为英文），并回答现场观众和老师们提出的问题。在研讨会后，根据报告的科学内容、科学价值和报告者的表达能力，评委老师们会评出一等奖、二等奖和优胜奖，分别授予不同份额的林桥奖学金。'
      ],
      list_2_title: '2. 参会条件：',
      list_2: [
        '有意展示自己天文科研成果的各大学各年级本科生或2025级研究生'
      ],
      list_3_title: '3. 研讨会注册时间和注册方式：',
      list_3: [
        '2025年北京大学本科生天文学术研讨会现已开放注册，欢迎各位同学踊跃参加。',
        '请参会同学做好以下准备：',
        '1. 注册会议，并提交报告题目和摘要。',
        '2. 准备作报告使用的电脑，下载安装腾讯会议客户端，提前测试好屏幕分享和音频视频功能。',
        '3. 准备报告ppt（ppt用英文，报告用中文），报告时长在10分钟左右（暂定，以后续通知为准）。',
        '4. 注册后，请留意后续的邮件通知。'
      ],
      bannerText: ['2025年北京大学本科生天文学术研讨会', '2025年9月26日'],
    },
    schedule: {
      subTitle: '初步日程',
      schedule: [
        '11月25日（星期一）：特邀报告、讨论、海报展示会',
        '11月26日（星期二）：特邀报告、讨论、海报展示会',
        '11月27日（星期三）：特邀报告、讨论、海报展示会',
      ]
    },
    registration: {
      title: '注册',
      content: [
        '2025 北京大学本科生天文学研讨会注册',
        ['研讨会主页：', 'https://undersymp25.kiaa-pku.cn'],
        '研讨会时间：2025年9月26日，13:00 - 19:10',
        '会议平台：腾讯会议',
        '注册时间：2025年7月30日至9月5日',
        ['注册网站：', 'https://www.wjx.top/vm/ekxIk52.aspx'],
        '注册二维码：'
      ],
    },
    fees: {
      title: '参会费用说明',
      content: [],
    },
    contact: {
      title: '联系方式',
      content: [
        '有关论坛的所有信息均可在网站上找到：',
        ["https://undersymp25.kiaa-pku.cn"],
        '如有任何问题，或需要签证申请支持，请联系：',
        // 将联系人信息作为数组
        ['谢静老师 (Jing Xie)，邮箱：xiejing5166@pku.edu.cn；电话：010-62751134',
          '康亚城 (Yacheng Kang)，邮箱：yckang@stu.pku.edu.cn',
          '钟佳航 (Jiahang Zhong)，邮箱：2300011601@stu.pku.edu.cn',
          '葛运生 (Yunsheng Ge)，邮箱：2300011620@stu.pku.edu.cn'],
        '我们期待在 2025 年北京大学本科生天文学研讨会与你相见！',
      ],
    },
    venue: {
      title: '会场信息',
      content_1: '本次活动将在北京大学科维理天文与天体物理研究所（KIAA-PKU）举行，地址在北京市海淀区颐和园路5号。获取更多信息，请关注后续通知。北京大学校园地图（标注了 KIAA 的位置）可在此获取：',
      content_2: '北京大学校园地图（标注了 KIAA 的位置）可在此获取：',
      content_3: '北京大学位置地图在此：',
      link_2: 'http://kavli.pku.edu.cn/visitor-info/maps',
      link_3: 'http://kavli.pku.edu.cn/sites/default/files/Visit_Info/images/pku_map_direction.pdf',
      hotel: '北京大学附近酒店信息:',
      hotel_link: '/hotels_zh.pdf',
      hotel_link_text: '下载酒店信息'
    },
    // ... 其他翻译内容
  },
};

const i18n = createI18n({
  locale: 'en', // 默认语言，可改为 'en'
  fallbackLocale: 'zh',
  messages,
});

export default i18n;
