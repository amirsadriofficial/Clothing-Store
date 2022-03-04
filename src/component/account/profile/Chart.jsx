import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import Title from './Title'

const createData = (time, amount) => {
  return { time, amount }
}

const data = [
  createData('January', 0),
  createData('February', 300),
  createData('March', 600),
  createData('April', 800),
  createData('May', 1500),
  createData('June', 1600),
  createData('July', 1700),
  createData('August', 1300),
  createData('September', 1900),
  createData('October', 2000),
  createData('November', 2200),
  createData('December', 2400),
]

const Chart = () => {
  const theme = useTheme()

  return (
    <>
      <Title>Last Year</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Shopping Chart ($)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart
