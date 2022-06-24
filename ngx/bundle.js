'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

/**
 * @name Ipos Printer
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { IposPrinter } from '@awesome-cordova-plugins/ipos-printer';
 *
 *
 * constructor(private iposPrinter: IposPrinter) { }
 *
 * ...
 *
 *
 * this.iposPrinter.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
exports.PrinterStatus = void 0;
(function (PrinterStatus) {
    PrinterStatus[PrinterStatus["PRINTER_NORMAL"] = 0] = "PRINTER_NORMAL";
    PrinterStatus[PrinterStatus["PRINTER_PAPERLESS"] = 1] = "PRINTER_PAPERLESS";
    PrinterStatus[PrinterStatus["PRINTER_THP_HIGH_TEMPERATURE"] = 2] = "PRINTER_THP_HIGH_TEMPERATURE";
    PrinterStatus[PrinterStatus["PRINTER_MOTOR_HIGH_TEMPERATURE"] = 3] = "PRINTER_MOTOR_HIGH_TEMPERATURE";
    PrinterStatus[PrinterStatus["PRINTER_IS_BUSY"] = 4] = "PRINTER_IS_BUSY";
    PrinterStatus[PrinterStatus["PRINTER_ERROR_UNKNOWN"] = 5] = "PRINTER_ERROR_UNKNOWN";
})(exports.PrinterStatus || (exports.PrinterStatus = {}));
var IposPrinter = /** @class */ (function (_super) {
    tslib.__extends(IposPrinter, _super);
    function IposPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IposPrinter.prototype.getPrinterStatus = function () { return core.cordova(this, "getPrinterStatus", {}, arguments); };
    IposPrinter.prototype.printerInit = function () { return core.cordova(this, "printerInit", {}, arguments); };
    IposPrinter.prototype.setPrinterPrintDepth = function (depth) { return core.cordova(this, "setPrinterPrintDepth", {}, arguments); };
    IposPrinter.prototype.setPrinterPrintFontType = function (typeface) { return core.cordova(this, "setPrinterPrintFontType", {}, arguments); };
    IposPrinter.prototype.setPrinterPrintFontSize = function (fontsize) { return core.cordova(this, "setPrinterPrintFontSize", {}, arguments); };
    IposPrinter.prototype.setPrinterPrintAlignment = function (alignment) { return core.cordova(this, "setPrinterPrintAlignment", {}, arguments); };
    IposPrinter.prototype.printerFeedLines = function (lines) { return core.cordova(this, "printerFeedLines", {}, arguments); };
    IposPrinter.prototype.printBlankLines = function (lines, height) { return core.cordova(this, "printBlankLines", {}, arguments); };
    IposPrinter.prototype.printText = function (text) { return core.cordova(this, "printText", {}, arguments); };
    IposPrinter.prototype.printSpecifiedTypeText = function (text, typeface, fontsize) { return core.cordova(this, "printSpecifiedTypeText", {}, arguments); };
    IposPrinter.prototype.printSpecFormatText = function (text, typeface, fontsize, alignment) { return core.cordova(this, "printSpecFormatText", {}, arguments); };
    IposPrinter.prototype.printColumnsText = function (colsTextArr, colsWidthArr, colsAlign, isContinuousPrint) { return core.cordova(this, "printColumnsText", {}, arguments); };
    IposPrinter.prototype.printBitmap = function (alignment, bitmapSize, mBitmap) { return core.cordova(this, "printBitmap", {}, arguments); };
    IposPrinter.prototype.printBarCode = function (data, symbology, height, width, textposition) { return core.cordova(this, "printBarCode", {}, arguments); };
    IposPrinter.prototype.printQRCode = function (data, modulesize, mErrorCorrectionLevel) { return core.cordova(this, "printQRCode", {}, arguments); };
    IposPrinter.prototype.printRawData = function (rawPrintData) { return core.cordova(this, "printRawData", {}, arguments); };
    IposPrinter.prototype.sendUserCMDData = function (data) { return core.cordova(this, "sendUserCMDData", {}, arguments); };
    IposPrinter.prototype.printerPerformPrint = function (feedlines) { return core.cordova(this, "printerPerformPrint", {}, arguments); };
    IposPrinter.pluginName = "IposPrinter";
    IposPrinter.plugin = "cordova-plugin-ipos-printe";
    IposPrinter.pluginRef = "com.mgdisc.IposPrinter";
    IposPrinter.repo = "https://github.com/Malindu22/cordova-plugin-ipos-printer.git";
    IposPrinter.platforms = ["Android"];
    IposPrinter.decorators = [
        { type: core$1.Injectable }
    ];
    return IposPrinter;
}(core.AwesomeCordovaNativePlugin));

exports.IposPrinter = IposPrinter;
