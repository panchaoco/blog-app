import * as React from 'react'
import { Input, View } from '@tarojs/components'

export default class NavBarView extends React.PureComponent {
  render() {
    return (
      <View>
        <Input placeholder='文章搜索' />
      </View>
    );
  }
}
