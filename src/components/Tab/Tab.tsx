import { useState } from 'react'
import { AtTabs, AtTabsPane } from 'taro-ui'
import * as React from 'react'


const Tab = () => {
  function handleClick() {

  }

  const [current] = useState(0)

  return (
    <AtTabs
      current={current}
      scroll
      tabList={[
        { title: '标签页1' },
        { title: '标签页2' },
        { title: '标签页3' },
        { title: '标签页4' },
        { title: '标签页5' },
        { title: '标签页6' }
      ]}
      onClick={handleClick}
    >
    </AtTabs>
  )
}

export default Tab
