
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
	
	let sorted=[];
	
	for(let i=0;i<matrix.length;i++){
		if(i%2){
			matrix[i].reverse();
		}
	}

	for(let i=0;i<matrix.length;i++){
		for(let j=0;j<matrix[i].length;j++){

			sorted.push(matrix[i][j]);
		}

		
	}

	return	sorted;
  
}
