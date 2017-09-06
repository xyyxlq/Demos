//电梯里面的广告代码。
const xor = function (string , salt) {
	string.replace(/\w/g,function (s) {
		String.fromCharCode(s.charCodeAt(0)^salt)
	})
}

const key = 1

console.log(xor("vCNI KQ AJGCR, QJMU OG VJG AMFG." , key))








const xor = (string,salt) =>
string.replace(/\w/g,s=>String.fromCharCode(s.charCodeAt(0)^salt))




