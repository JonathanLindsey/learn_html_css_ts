var deg_to_rad = function(deg: number) {
    return deg * (Math.PI/180);
}

var vectorToXY = function(centerX: number, centerY: number, angleDeg: number, length: number) {
    let angleRad = deg_to_rad(angleDeg);
    let x = Math.cos(angleRad) * length;
    let y = -1 * Math.sin(angleRad) * length;  // Multiply by -1 because down is positive when working with graphics.
    
    return [x + centerX, y + centerY];
}