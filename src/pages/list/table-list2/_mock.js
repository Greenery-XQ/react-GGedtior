import {
  parse
} from 'url';
// mock tableListDataSource
let tableListDataSource = [];

// for (let i = 0; i < 8; i += 1) {
tableListDataSource.push({
  key: 1,
  disabled: true,
  href: 'https://ant.design',
  avatar: [
    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
  ][2 % 2],
  name: `行数`,
  title: `关于中秋节放假通知`,
  owner: '王莹莹',
  desc: '中秋节',
  callNo: Math.floor(Math.random() * 1000),
  status: Math.floor(Math.random() * 10) % 4,
  updatedAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  createdAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  progress: Math.ceil(Math.random() * 100),
  name2: 'hahaha2',
});
tableListDataSource.push({
  key: 2,
  disabled: true,
  href: 'https://ant.design',
  avatar: [
    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
  ][2 % 2],
  name: `行数`,
  title: `关于国庆节放假通知`,
  owner: '王莹莹',
  desc: '国庆节',
  callNo: Math.floor(Math.random() * 1000),
  status: Math.floor(Math.random() * 10) % 4,
  updatedAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  createdAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  progress: Math.ceil(Math.random() * 100),
  name2: 'hahaha2',
});
tableListDataSource.push({
  key: 3,
  disabled: true,
  href: 'https://ant.design',
  avatar: [
    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
  ][2 % 2],
  name: `行数`,
  title: `关于元旦节放假通知`,
  owner: '王莹莹',
  desc: '元旦',
  callNo: Math.floor(Math.random() * 1000),
  status: Math.floor(Math.random() * 10) % 4,
  updatedAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  createdAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  progress: Math.ceil(Math.random() * 100),
  name2: 'hahaha2',
});
tableListDataSource.push({
  key: 4,
  disabled: true,
  href: 'https://ant.design',
  avatar: [
    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
  ][2 % 2],
  name: `行数`,
  title: `关于春节节放假通知`,
  owner: '王文娟',
  desc: '春节',
  callNo: Math.floor(Math.random() * 1000),
  status: Math.floor(Math.random() * 10) % 4,
  updatedAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  createdAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  progress: Math.ceil(Math.random() * 100),
  name2: 'hahaha2',
});
tableListDataSource.push({
  key: 5,
  disabled: true,
  href: 'https://ant.design',
  avatar: [
    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
  ][2 % 2],
  name: `行数`,
  title: `关于清明节放假通知`,
  owner: '王莹莹',
  desc: '清明节',
  callNo: Math.floor(Math.random() * 1000),
  status: Math.floor(Math.random() * 10) % 4,
  updatedAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  createdAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  progress: Math.ceil(Math.random() * 100),
  name2: 'hahaha2',
});
tableListDataSource.push({
  key: 6,
  disabled: true,
  href: 'https://ant.design',
  avatar: [
    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
  ][2 % 2],
  name: `行数`,
  title: `关于中秋节放假通知`,
  owner: '王莹莹',
  desc: '劳动节',
  callNo: Math.floor(Math.random() * 1000),
  status: Math.floor(Math.random() * 10) % 4,
  updatedAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  createdAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  progress: Math.ceil(Math.random() * 100),
  name2: 'hahaha2',
});
tableListDataSource.push({
  key: 7,
  disabled: true,
  href: 'https://ant.design',
  avatar: [
    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
  ][2 % 2],
  name: `行数`,
  title: `关于儿童节节放假通知`,
  owner: '王莹莹',
  desc: '儿童节',
  callNo: Math.floor(Math.random() * 1000),
  status: Math.floor(Math.random() * 10) % 4,
  updatedAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  createdAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  progress: Math.ceil(Math.random() * 100),
  name2: 'hahaha2',
});
tableListDataSource.push({
  key: 8,
  disabled: true,
  href: 'https://ant.design',
  avatar: [
    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
  ][2 % 2],
  name: `行数`,
  title: `关于中秋节放假通知`,
  owner: '王莹莹',
  desc: '中秋节',
  callNo: Math.floor(Math.random() * 1000),
  status: Math.floor(Math.random() * 10) % 4,
  updatedAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  createdAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  progress: Math.ceil(Math.random() * 100),
  name2: 'hahaha2',
});
tableListDataSource.push({
  key: 9,
  disabled: true,
  href: 'https://ant.design',
  avatar: [
    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
  ][2 % 2],
  name: `行数`,
  title: `关于中秋节放假通知`,
  owner: '王莹莹',
  desc: '中秋节',
  callNo: Math.floor(Math.random() * 1000),
  status: Math.floor(Math.random() * 10) % 4,
  updatedAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  createdAt: new Date(`2017-07-${Math.floor(1 / 2) + 1}`),
  progress: Math.ceil(Math.random() * 100),
  name2: 'hahaha2',
});
tableListDataSource.push({
  key: 10,
  disabled: true,
  href: 'https://ant.design',
  avatar: [
    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
  ][10 % 2],
  name: `行数`,
  title: `关于中秋节放假通知`,
  owner: '王莹莹',
  desc: '中秋节',
  callNo: Math.floor(Math.random() * 1000),
  status: Math.floor(Math.random() * 10) % 4,
  updatedAt: new Date(`2017-07-${Math.floor(10 / 2) + 1}`),
  createdAt: new Date(`2017-07-${Math.floor(10 / 2) + 1}`),
  progress: Math.ceil(Math.random() * 100),
  name2: 'hahaha2',
});


function getRule(req, res, u) {
  let url = u;

  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    // eslint-disable-next-line prefer-destructuring
    url = req.url;
  }

  const params = parse(url, true).query;
  let dataSource = tableListDataSource;

  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }

      return prev[s[0]] - next[s[0]];
    });
  }

  if (params.status) {
    const status = params.status.split(',');
    let filterDataSource = [];
    status.forEach(s => {
      filterDataSource = filterDataSource.concat(
        dataSource.filter(item => {
          if (parseInt(`${item.status}`, 10) === parseInt(s.split('')[0], 10)) {
            return true;
          }

          return false;
        }),
      );
    });
    dataSource = filterDataSource;
  }

  if (params.name) {
    dataSource = dataSource.filter(data => data.name.indexOf(params.name) > -1);
  }

  let pageSize = 10;

  if (params.pageSize) {
    pageSize = parseInt(`${params.pageSize}`, 0);
  }

  const result = {
    list: dataSource,
    pagination: {
      total: dataSource.length,
      pageSize,
      current: parseInt(`${params.currentPage}`, 10) || 1,
    },
  };
  return res.json(result);
}

function postRule(req, res, u, b) {
  let url = u;

  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    // eslint-disable-next-line prefer-destructuring
    url = req.url;
  }

  const body = (b && b.body) || req.body;
  const {
    method,
    name,
    desc,
    key
  } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter(item => key.indexOf(item.key) === -1);
      break;

    case 'post':
      const i = Math.ceil(Math.random() * 10000);
      tableListDataSource.unshift({
        key: i,
        href: 'https://ant.design',
        avatar: [
          'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
          'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        name: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        desc,
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: new Date(),
        createdAt: new Date(),
        progress: Math.ceil(Math.random() * 100),
        name1: 'hahaha',
      });
      break;

    case 'update':
      tableListDataSource = tableListDataSource.map(item => {
        if (item.key === key) {
          return { ...item,
            desc,
            name
          };
        }

        return item;
      });
      break;

    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };
  return res.json(result);
}

export default {
  'GET /api/rule': getRule,
  'POST /api/rule': postRule,
};