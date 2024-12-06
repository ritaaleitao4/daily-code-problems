enum logType {
    ENTER = 'enter',
    EXIT = 'exit'
}

type Entry = {
    timestamp: number;
    count: number;
    type: logType;
};

const entries: Entry[] = [
    { "timestamp": 1526579928, count: 3, "type": logType.ENTER },
    { "timestamp": 1526580382, count: 2, "type": logType.EXIT },
    { "timestamp": 1526579938, count: 6, "type": logType.ENTER },
    { "timestamp": 1526579943, count: 1, "type": logType.ENTER },
    { "timestamp": 1526579944, count: 0, "type": logType.ENTER },
    { "timestamp": 1526580345, count: 5, "type": logType.EXIT },
    { "timestamp": 1526580351, count: 3, "type": logType.EXIT },
];

function findBusiestPeriod(entries: Entry[]): [number, number] {
    let peopleInBuilding: number = 0;
    let maxPeopleAtPeriod: number = 0;
    let busiestStampStart: number = 0;
    let busiestStampEnd: number = 0;
    let currentStampStart: number = 0;

    for (const entry of entries) {
        if (entry.type === 'enter') {
            peopleInBuilding += entry.count;
        } else {
            peopleInBuilding -= entry.count;
        }

        if (peopleInBuilding > maxPeopleAtPeriod) {
            maxPeopleAtPeriod = peopleInBuilding;
            busiestStampStart = currentStampStart;
            busiestStampEnd = entry.timestamp;
        }

        currentStampStart = entry.timestamp;
    }

    console.log('Busiest Period in the building is from ' + busiestStampStart + ' to ' + busiestStampEnd);

    return [busiestStampStart, busiestStampEnd];
}

findBusiestPeriod(entries)