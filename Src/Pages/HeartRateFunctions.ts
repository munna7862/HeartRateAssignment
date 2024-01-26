interface HeartRateMeasurement {
  beatsPerMinute: number;
  timestamps: {
    startTime: string;
    endTime: string;
  };
}

interface DailyStatistics {
  date: string;
  min: number;
  max: number;
  median: number;
  latestDataTimestamp: string;
}

export class HeartRateFunctions {

  public calculateDailyStatistics(heartRateData: any): DailyStatistics {

    let arrBeatsPerMinute: number[] = [];
    for (let i = 0; i < heartRateData.length; i++) {
      arrBeatsPerMinute.push(heartRateData[i].beatsPerMinute);
    }

    const sortedData = arrBeatsPerMinute.sort((a, b) => a - b);
    const min = sortedData[0];
    const max = sortedData[heartRateData.length - 1];

    let median: number;
    if (heartRateData.length % 2 == 0) {
      const mid = heartRateData.length / 2;
      median = (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      const mid = Math.floor(heartRateData.length / 2);
      median = sortedData[mid];
    }

    const latestDataTimestamp = heartRateData[heartRateData.length - 1].timestamps.endTime;

    return {
      date: heartRateData[0].timestamps.startTime.substr(0, 10),
      min,
      max,
      median,
      latestDataTimestamp,
    };
  }


  public processHeartRateData(heartRateData: any): DailyStatistics[] {
    const dailyStatistics: DailyStatistics[] = [];
    const groupedData: { [date: string]: HeartRateMeasurement[] } = {};

    // Group Data By Data
    for (let i = 0; i < heartRateData.length; i++) {
      const measurement = heartRateData[i];
      const date = measurement.timestamps.startTime.substr(0, 10);

      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(measurement);
    }

    // Calculate statistics for each day
    for (const date in groupedData) {
      if (groupedData.hasOwnProperty(date)) {
        const dailyStats = this.calculateDailyStatistics(groupedData[date]);
        dailyStatistics.push(dailyStats);
      }
    }
    return dailyStatistics;
  }

  
}