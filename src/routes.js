import Login from './pages/Login'
import Main from './pages/Main'
import Feerecord from './pages/Feerecord'
import Historyrecord from './pages/Historyrecord'
import Historyrecorddetail from './pages/Historyrecorddetail'
import Dispense from './pages/Dispense'
import Dispenserecord from './pages/Dispenserecord'
import Feedback from './pages/Feedback'
import Help from './pages/Help'
import About from './pages/About'
import Message from './pages/Message'
import MessageDetail from './pages/MessageDetail'
import Audit from './pages/Audit'
import Auditcomplete from './pages/Auditcomplete'
import Search from './pages/Search'
export default [
    {
        name: 'Main', // 登录
        path: '/login',
        meta: { title: '登录' },
        component: Login
    },
    {
        name: 'Main', // 首页
        path: '/main',
        meta: { title: '首页' },
        component: Main
    },
    {
        name: 'Feerecord', // 优免记录
        path: '/feerecord/',
        meta: { title: '优免记录' },
        component: Feerecord
    },
    {
        name: 'Historyrecord', // 历史记录
        path: '/historyrecord/',
        meta: { title: '历史记录' },
        component: Historyrecord
    },
    {
        name: 'Historyrecorddetail', // 历史记录详情
        path: '/historyrecorddetail',
        meta: { title: '历史记录详情' },
        component: Historyrecorddetail
    },
    {
        name: 'Dispense', // 发放
        path: '/dispense',
        meta: { title: '发放' },
        component: Dispense
    },
    {
        name: 'Dispenserecord', // 发放记录
        path: '/dispenserecord',
        meta: { title: '发放记录' },
        component: Dispenserecord
    },
    {
        name: 'Feedback', // 反馈
        path: '/feedback',
        component: Feedback,
        meta: {
            title: '反馈'
        }
    },
    {
        name: 'Help', // 帮助
        path: '/help',
        component: Help,
        meta: {
            title: '帮助'
        }
    },
    {
        name: 'About', // 关于
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        name: 'Message', // 消息中心
        path: '/message',
        component: Message,
        meta: {
            title: '消息中心'
        }
    },
    {
        name: 'MessageDetail', // 消息详情
        path: '/messageDetail',
        component: MessageDetail,
        meta: {
            title: '消息详情'
        }
    },
    {
        name: 'Audit', // 审批
        path: '/audit',
        component: Audit,
        meta: {
            title: '审批'
        }
    },
    {
        name: 'Auditcomplete', // 已审批
        path: '/auditcomplete',
        component: Auditcomplete,
        meta: {
            title: '已审批'
        }
    },
    {
        name: 'Search', // 搜索
        path: '/search',
        component: Search,
        meta: {
            title: '搜索'
        }
    }
]
