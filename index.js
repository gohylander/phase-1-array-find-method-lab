function superbowlWin(record){
    let win = record.find(superbowl => superbowl.result === "W");
    if (win) {
        return win.year
    }
}