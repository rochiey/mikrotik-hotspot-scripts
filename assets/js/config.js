//this is to enable multi vendo setup, set to true when multi vendo is supported
var isMultiVendo = false;
// 0 = traditional (client choose a vendo) , 1 = auto select vendo base on hotspot address, 2 = interface name ( this will preserve one hotspot server ip only)
var multiVendoOption = 0;

//list here all node mcu address for multi vendo setup
var multiVendoAddresses = [
	{
		vendoName: "VLAN1", //change accordingly to your vendo name
		vendoIp: "10.0.0.2", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false, //change true if you want to enable eloading station
		hotspotAddress: "10.0.0.1", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
		interfaceName: "VLAN1" // hotspot interface name preser
	},
	{
		vendoName: "VLAN2", //change accordingly to your vendo name
		vendoIp: "10.0.0.3", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false, //change true if you want to enable eloading station
		hotspotAddress: "10.0.0.1", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
		interfaceName: "VLAN1" // hotspot interface name preser
	}
	
];


//0 means its login by username only, 1 = means if login by username + password
var loginOption = 0; //replace 1 if you want login voucher by username + password

var dataRateOption = false; //replace true if you enable data rates
//put here the default selected address
var vendorIpAddress = "10.0.0.5";

var chargingEnable = false; //replace true if you enable charging, this can be override if multivendo setup

var eloadEnable = false; //replace true if you enable eload, this can be override if multivendo setup

//hide pause time / logout true = you want to show pause / logout button
var showPauseTime = true;

//enable member login, true = if you want to enable member login
var showMemberLogin = false;

//enable extend time button for customers
var showExtendTimeButton = true;

//enable mac address as voucher code
var macAsVoucherCode = false;

var qrCodeVoucherPurchase = false;

// Telegram Feature ----------------------------------------------------------------------------------------------------------------

var EnableTelegram = true;

// Notify for every coin inserted by custmer via Telegram.
var CoinDropNotify = false;

// Telegram Token
var  telegramToken  = "--";

// Telegram ChatID
var  telechatId = "--";

// OTHER ---------------------------------------------------------------------------------------------------------------------------

var EnableAnnouncement = true;
var annoucementText= "PINEDA WIFI HOTSPOT"

var FooterName = "rochiey";

// Show or Hide insert coin Convert unused voucher
var ConvertUnusedVoucher = false; // change false if you want to hide it