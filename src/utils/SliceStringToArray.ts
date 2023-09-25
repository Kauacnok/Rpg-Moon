export function sliceStringToArrays(array: any, str: string) {
	let count = 0
	var result = ""
	let regex = /([0X]+ \/)+/g

	str.replace(regex, (regex_result: string, group1: string, regex_first_search_ocurrency: string, full_string: string ): any => 
		{
			
			result = group1.replace(" /", "")
			for(var i = 0; i < result.length; i++) {
	 
				array[count][i] = result.slice(i, i+1)
			
			}
			count = count + 1
		}
	)

	return array
}
