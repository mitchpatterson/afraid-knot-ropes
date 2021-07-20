
export const tsvToJson = (csv: string): any[] => {
    const lines: string[] = csv.split("\n");
    const headers: string[] = lines[0].split("\t");
    const result = [];
    
    for(var i=1; i < lines.length; i++) {
        let obj = {};
        var currentline: string[] = lines[i].split("\t");
    
        for(var j=0; j < headers.length; j++) {
            // obj[headers[j]] = currentline[j];
            obj = {
                ...obj,
                [headers[j].trim()]: currentline[j]
            };
        }
    
        result.push(obj);
    }

    return result;
};

export const csvStringifiedUrlsToReadableArrayFormat = (data: string): string[] => {
    let currentString = data;
    const searchTerm = "https";
    const dataArray: string[] = [];
    while(currentString.length) {
        const firstIndex = currentString.indexOf(searchTerm);
        if (firstIndex || firstIndex === 0) {
            const secondIndex = currentString.indexOf(searchTerm, firstIndex + 1);
            if (secondIndex !== -1) {
                dataArray.push(currentString.substring(0, secondIndex).trim());
                currentString = currentString.substring(secondIndex);
            } else {
                dataArray.push(currentString.trim());
                break;
            }
        } else {
            break;
        };
    }
    return dataArray;
};