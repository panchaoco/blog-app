import * as React from 'react'
// @ts-ignore
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import request from '../../utils/request'

import '@tarojs/taro/html5.css'
import 'highlight.js/styles/atom-one-dark.css'
import './index.scss'

interface ArticleState {
  article: {[key: string]: any}
}

export default class ArticleView extends React.PureComponent<{}, ArticleState> {

  constructor(props) {
    super(props)
    this.state = {
      article: null
    }
  }

  async componentWillMount() {
    await this.getArticle()
  }

  public async getArticle() {
    const res = await request({
      url: `/v1/api/articles/${Taro.getCurrentInstance().router.params.id}`
    })
    console.log('res', res)
    if (res.state === 0) {
      this.setState({
        article: res.data
      })
    }
  }

  render() {
    const article = this.state.article
    return (
      <ScrollView>
        {article? <View className='taro_html article' dangerouslySetInnerHTML={{__html: article.content}} /> : undefined}
      </ScrollView>
    )
  }
}
