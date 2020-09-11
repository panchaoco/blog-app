// @ts-ignore
import React, { Component } from 'react'
import { View, Text, ScrollView, Image, CoverImage, Input } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane, AtNavBar } from 'taro-ui'

// @ts-ignore
import Taro from '@tarojs/taro'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import 'taro-ui/dist/style/components/nav-bar.scss'
import './index.scss'

import request from '../../utils/request'

interface IndexState {
  current: number,
  articleList?: any[],
  navbarData: {[key: string]: any}
}

export default class Index extends Component<{}, IndexState> {

  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      articleList: [],
      navbarData: {
        type: 'tab',//导航栏样式
        tab1: '部门总览',
        tab2: '员工分析',
        backgroundColor: '#1E3255', //导航栏背景颜色
        textColor: '#ffffff', //导航栏字体颜色
        backType: 'backhome', //返回按钮类型
        backImg: 'white' //返回按钮的颜色
      }
    }
  }
  async componentWillMount () {
    await this.getAppArticle()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  public handleClick = (current) => {
    console.log('current', current)
    this.setState({
      current
    })
  }

  public async getAppArticle () {
    const res = await request({
      url: '/v1/api/articles?article_type=2'
    })
    console.log(res)
    if (res.state === 0) {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        articleList: res.data
      })
    }
  }

  public gotoArticle = (item) => {
    Taro.navigateTo({
      url: '/pages/article/index?id=' + item.id
    })
  }

  render () {
    const { navbarData, current } = this.state
    return (
      <View className='index'>
        <View style={{
          paddingTop: Taro.$navBarMarginTop + 'px'
        }}
        >
          <View className='nav-bar'>
            <Input placeholder='搜索内容' />
          </View>
        </View>

        <AtTabs
          current={current}
          tabList={[
            { title: '技术圈' },
            { title: '桃花' },
            { title: '文章' },
            { title: '归档' }
          ]}
          onClick={this.handleClick}
        >
          <AtTabsPane current={current} index={0}>
            <ScrollView>
              { this.state.articleList?.map(item => (
                <View className='article-item' onClick={() => {this.gotoArticle(item)}}>
                  <CoverImage
                    className='article-img'
                    src={item.img_src}
                  />
                  <View className='desc'>
                    <Text className='title'>{item.title}</Text>
                    <View className='desc-cont'>{item.desc}</View>
                  </View>
                </View>
              )) }
            </ScrollView>
          </AtTabsPane>
          <AtTabsPane current={current} index={1}></AtTabsPane>
          <AtTabsPane current={current} index={2}></AtTabsPane>
          <AtTabsPane current={current} index={3}></AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
