import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const ColumnGraph = ({ globalData }) => {
    const gData = globalData;
    console.log('gData',gData);
    const faceRecover = gData.Confirm - 90587745;
    const data = [
        {
          type: 'Confirmed',
          case: gData.Confirm,
        },
        {
          type: 'Deaths',
          case: 90587745,
        },
        {
          type: 'Recovered',
          case: faceRecover,
        },
      ];

      const config = {
        data,
        xField: 'type',
        yField: 'case',
        label: {
          position: 'middle',
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: '类别',
          },
          case: {
            alias: '',
          },
        },
      };

    return (
        <div>
            <Column {...config} />
        </div>
    )
}

export default ColumnGraph
