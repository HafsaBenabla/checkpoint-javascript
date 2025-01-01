function marathonDistance(d) {
    if (!d || d.length === 0) {
        return false;
    }
    let totalDistance = 0;
    for (let i = 0; i < d.length; i++) {
        if (d[i] < 0) {
            totalDistance += -d[i];
        } else {
            totalDistance += d[i];
        }
    }
    return totalDistance === 25;
}