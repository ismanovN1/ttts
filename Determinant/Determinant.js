export const MultiplicationMatrices = (matrix , matrix2) => {
    const extraMatrix = []
    for (var k = 0; k < matrix.length; k++) {
        extraMatrix.push([])
        for (var i = 0; i < matrix2[0].length; i++) {
            extraMatrix[k].push(0)
            for (var j = 0; j < matrix[0].length; j++) {
                extraMatrix[k][i] += matrix[k][j] * matrix2[j][i]
            }
        }
    }
    return extraMatrix
}

export const MultiplicationNumberToMatrix = (number , matrix) => {
    let extraMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        extraMatrix.push([])
        for (let j = 0; j < matrix[0].length; j++) {
            extraMatrix[i].push(number * matrix[i][j])
        }
    }
    return extraMatrix
}

export const Transpose = (matrix) => {
    let extraMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        extraMatrix.push([])
        for (let j = 0; j < matrix[0].length; j++) {
            extraMatrix[i][j] = matrix[j][i]
        }
    }
    return extraMatrix
}


export const Determinant = ( elems ) => {
    let [ c , d , m ] = [ [] , [] , 0 ]
    let Length = elems.length
    for ( let k = 0 ; k < Length ; k++ ){
        d.push( [] )
        let count = 0
        for ( let i = 0 ; i < Length ; i++ ){
            if (i != 0) {
                d[ k ].push( [] )
                for( let j = 0  ; j < Length ; j++ ){
                    if (j != k) {
                        d[ k ][ count ].push( elems[ i ][ j ])
                    }
                }
                count++
            }
        }
        c.push([ elems[ 0 ][ k ] , d[ k ] ])
    }
    if ( c.length === 1 ) {
        return c[0][0]
    } else {
        for (var i = 0; i < c.length; i++) {
            for (var j = 0; j < c.length; j++) {
                ( j==0 ) && ( m += Math.pow( -1 , i + j+2 ) * c [ i ][ 0 ] * Determinant( c [ i ][ 1 ] ))
            }
        }

    }
    return m
}


export const CalcAdjugate = (elems) => {
    let [c, d, m] = [[], [], []]
    let Length = elems.length
    for (let g = 0; g < Length; g++) {
        c.push([])
        d = []
        for (let k = 0; k < Length; k++) {
            d.push([])
            let count = 0
            for (let i = 0; i < Length; i++) {
                if (i != g) {
                    d[k].push([])
                    for (let j = 0; j < Length; j++) {
                        if (j != k) {
                            d[k][count].push(elems[i][j])
                        }
                    }
                    count++
                }
            }
            c[g].push( d[k])
        }
    }
    for (let f = 0; f < Length; f++) {
        m.push([])
        for (let i = 0; i < c.length; i++) {
            for (let j = 0; j < c.length; j++) {
                (j == f) && (m[f].push( Math.pow(-1, i + j + 2) * Determinant (c[f][i]) ))
            }
        }
    }
    return m
}
export const InverseMatrix = (matrix) => {
    const determine = Determinant(matrix)
    const transposition = Transpose(matrix)
    const adjugate = CalcAdjugate(transposition)
    const extra = 1 / determine
    const result = MultiplicationNumberToMatrix(extra, adjugate)
    return result
}
