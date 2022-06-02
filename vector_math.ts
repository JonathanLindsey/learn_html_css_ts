class vector_math {
    private static deg_to_rad(deg: number): number {
        return deg * (Math.PI/180);
    }

    public static vectorToXY(centerX: number, centerY: number, angleDeg: number, length: number): [number, number] {
        let angleRad = vector_math.deg_to_rad(angleDeg);
        let x = Math.cos(angleRad) * length;
        let y = -1 * Math.sin(angleRad) * length;  // Multiply by -1 because down is positive when working with graphics.
        
        return [x + centerX, y + centerY];
    }
}