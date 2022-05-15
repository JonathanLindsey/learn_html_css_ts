var deg_to_rad = function(deg) {
    return deg * (Math.PI/180);
}

var vectorToXY = function(centerX, centerY, angleDeg, length) {
    angleRad = deg_to_rad(angleDeg);
    x = cos(angleRad) * length;
    y = -1 * sin(angleRad) * length;  // Multiply by -1 because down is positive when working with graphics.
    
    return [x + centerX, y + centerY];
}