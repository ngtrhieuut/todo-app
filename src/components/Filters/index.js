import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchText, statusFiltersChange, prioriryFilterChange } from '../../redux/actions' 

const { Search } = Input;

export default function Filters() {

  const dispatch = useDispatch();

  const [searchTextValue, setSearchTextValue] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [prioriryFilter, setPrioriryFilter] = useState([]);

  const handleSearchText = (e) => {
    setSearchTextValue(e.target.value)
    dispatch(searchText(e.target.value))
  }

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value)
    dispatch(statusFiltersChange(e.target.value))
  }

  const handlePriority = (e) => {
    setPrioriryFilter(e)
    dispatch(prioriryFilterChange(e))
  } 

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search 
          value={searchTextValue} 
          placeholder='input search text' 
          onChange={handleSearchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handleStatusFilterChange} value={statusFilter}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handlePriority}
          value={prioriryFilter}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
