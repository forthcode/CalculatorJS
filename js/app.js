$(function(){

	var currentText ='';
	var temp ='';
	var operator='';
	var equal='';

	$('#key1').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}
		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			equal='';
			currentText='1';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}
		currentText=currentText+'1';
		$('#message').text(currentText);
	})

	$('#key2').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}
		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='2';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'2';
		$('#message').text(currentText);
	})
	$('#key3').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='3';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}
		currentText=currentText+'3';
		$('#message').text(currentText);
	})
	$('#key4').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			equal='';
			currentText='4';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'4';
		$('#message').text(currentText);
	})
	$('#key5').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
				equal='';
			currentText='5';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'5';
		$('#message').text(currentText);
	})
	$('#key6').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
		
			equal='';
			currentText='6';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'6';
		$('#message').text(currentText);
	})
	$('#key7').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {

			equal='';
			currentText='7';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'7';
		$('#message').text(currentText);
	})
	$('#key8').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {

			equal='';
			currentText='8';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'8';
		$('#message').text(currentText);
	})
	$('#key9').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {

			equal='';
			currentText='9';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'9';
		$('#message').text(currentText);
	})
	$('#keyPoint').on('click',function(){


		if (currentText!=''&&temp==''&&operator==''&&equal!='') {

			equal='';
			currentText='.';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'.';
		$('#message').text(currentText);
	})
	$('#keyNeg').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}
		else if(currentText<0){
			return 0;
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {

			equal='';
			currentText='-';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'-';
		$('#message').text(currentText);
	})
	$('#keyC').on('click',function(){
		equal='';
		temp='';
		$('#message').text('0');
		currentText='';
		
	})
	$('#key0').on('click',function(){
		if(currentText==''&&temp==''&&operator==''&&equal==''||currentText=='0'){
			currentText='0'

		}else if (currentText!=''&&temp==''&&operator==''&&equal=='') {

			currentText += '0';
			$('#message').text(currentText);
		}else if (currentText==''&&temp!=''&&operator!=''&&equal==''){

			currentText += '0';
			$('#message').text(currentText);
		}else if (currentText!=''&&temp==''&&operator==''&&equal!='') {
	
			equal='';
			currentText='0';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}else if (currentText!=''&&temp!=''&&operator!=''&&equal==''){
		
			currentText += '0';
			$('#message').text(currentText);
		}else{
	
			currentText += '0';
			$('#message').text(currentText);

		}
		
			
	})
	$('#keyPlus').on('click',function(){
		if(temp&&currentText!=''){
			$('#message').text( calculate(temp,currentText,operator) );
		}
		temp = currentText;
		currentText='';
		operator = '+';
		
	})
	$('#keyMinus').on('click',function(){
		if(temp&&currentText!=''){
			$('#message').text( calculate(temp,currentText,operator) );
		}
		temp = currentText;
		currentText='';
		operator = '-';
	})
	$('#keyMul').on('click',function(){
		if(temp&&currentText!=''){
			$('#message').text( calculate(temp,currentText,operator) );
		}
		temp = currentText;
		currentText='';
		operator = '*';
	})
	$('#keyDiv').on('click',function(){
		if(temp&&currentText!=''){
			$('#message').text( calculate(temp,currentText,operator) );
		}
		temp = currentText;
		currentText='';
		operator = '/';
	})
	$('#keyEqual').on('click',function(){
		equal = 'hi';
		$('#message').text( calculate(temp,currentText,operator) );
		operator = '';
	})

	function calculate(n1,n2,operator){
		var result;
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);
		switch (operator){
			case '+':
				result=n1+n2;
				break;
			case '-':
			    result=n1-n2;
			    break;
			case '*':
			    result=n1*n2;
			    break;
            case '/':
			    result=n1/n2;
			    break;
			default:
				return;
				break;
		}
		
		var resultInt=parseInt(result);
		var resultDec=(result-resultInt).toPrecision(3);
		var resultPrint;	
		if(resultDec==0){
			resultPrint = resultInt;
			}
		else {	
			resultPrint = parseFloat(parseInt(resultInt)+parseFloat(resultDec));	
			
		}
				
			
		if(resultPrint>=1000000000||resultPrint<=-1000000000)
			resultPrint = "Overflow";
	
	
		currentText = resultPrint;
		temp='';


		return resultPrint;

	}

});
