//Status: Accepted
/**
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

    An integer x.
        Record a new score of x.
    '+'.
        Record a new score that is the sum of the previous two scores.
    'D'.
        Record a new score that is the double of the previous score.
    'C'.
        Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record after applying all the operations.
 */
function calPoints(operations: string[]): number {
    
    let record: number[] = [];
    let totalScore: number = 0;

    // Determine record.
    for (let operation of operations) { 
        switch (operation) {
            case "D": {
                // Guard clause: cannot execute on empty record.
                if (record.length) { 
                    record.push(record[record.length-1] * 2);
                } else {
                    record.push(0);
                }
                break;
            }
            case "C": {
                // Guard clause: cannot execute on empty record.
                if (record.length) record.pop();
                break;
            }
            case "+": {
                // Guard clause: cannot execute on record.length less than 2.
                if (record.length < 2) break;

                let record_a:number = record[record.length-1];
                let record_b:number = record[record.length-2];
                record.push(record_a+record_b);
                break;
            }
            default: {
                if (typeof +operation == "number") {
                    let result:number = +operation;
                    record.push(result);
                }
                break;
            }
        }

    }
    
    // Sum completed record.
    for (let score of record) {
        totalScore += score;
    }
    return totalScore;
}