
import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


function AsideSearch() {
    return (

        <Input placeholder={'Поиск среди контактов'} style={{ background: '#F7F8F9', borderRadius: '2px' }} prefix={<SearchOutlined />} />
    )
}

export default AsideSearch;
