# Error Code



#### ICC Error Code

| Error code | Error name | Comment |
| --- | --- | --- |
| F7CC(-2100) | SC_VCCERR | Voltage mode error |
| F7CB(-2101) | SC_SLOTERR | Cartoon error |
| F7CA(-2102) | SC_PARERR | Parity error |
| F7C9(-2103) | SC_PARAERR | Parameter error |
| F7C8(-2104) | SC_PROTOCALERR | Protocol error |
| F7C7(-2105) | SC_DATALENERR | Wrong data length |
| F7C6(-2106) | SC_CARDOUT | Card out |
| F7C5(-2107) | SC_NORESET | Not initialized |
| F7C4(-2108) | SC_TIMEOUT | Card communication timeout |
| F7C3(-2109) | SC_PPSERR | PPS error |
| F7C2(-2110) | SC_ATRERR | ATR error |
| F7C1(-2111) | SC_APDUERR | Card communication failed |
| F7AD(-2131) | MEMIC_ERR_FAIL | Operation failed |
| F7AC(-2132) | MEMIC_ERR_NOCARD | No card |
| F7AB(-2133) | MEMIC_ERR_CARD_REMOVED | The card was removed during the operation |
| F7AA(-2134) | MEMIC_ERR_UNSUP_TYPE | Card type is not supported |
| F7A9(-2135) | MEMIC_ERR_MFC | Card manufacturer code is incorrect |
| F7A8(-2136) | MEMIC_ERR_PARAM | Parameter error |
| F7A7(-2137) | MEMIC_ERR_UNSUP_OPT | Operation is not supported yet |
| F7A6(-2138) | MEMIC_ERR_AUTH | Authentication failed |
| F7A5(-2139) | MEMIC_ERR_CHECK | Bad password, limited number of times |
| F7A4(-2140) | MEMIC_ERR_VERIFY | Wrong password, no limit |
| F7A3(-2141) | MEMIC_ERR_READ | Failed to read |
| F7A2(-2142) | MEMIC_ERR_WRITE | Write failure |
| F7A1(-2143) | MEMIC_ERR_ERASE | Erase failed |
| F7A0(-2144) | MEMIC_ERR_RESC | Failed to reset password verification |
| F79F(-2145) | MEMIC_ERR_NACK | Did not receive ACK |
| F79E(-2146) | MEMIC_ERR_WRITE_P | Write protection bit failed |
| F79D(-2147) | MEMIC_ERR_PROTECTED | Has been write protected, not operational |
| F79C(-2148) | MEMIC_ERR_KEY_UPDATE | Password update failed |
| F79B(-2149) | MEMIC_ERR_CARD_LOCKED | Card is locked |



#### PCD Error Code

| Error code | Error name | Comment |
| --- | --- | --- |
| F447(-3001) | RET_RF_ERR_PARAM | Parameter error |
| F446(-3002) | RET_RF_ERR_NO_OPEN | RF module is not turned on |
| F445(-3003) | RET_RF_ERR_NOT_ACT | Card not activated |
| F444(-3004) | RET_RF_ERR_MULTI_CARD | Multiple cards |
| F443(-3005) | RET_RF_ERR_TIMEOUT | Timeout is not responding |
| F442(-3006) | RET_RF_ERR_PROTOCOL | Protocol error |
| F441(-3007) | RET_RF_ERR_TRANSMIT | Communication transmission error |
| F440(-3008) | RET_RF_ERR_AUTH | M1 card authentication failed |
| F43F(-3009) | RET_RF_ERR_NO_AUTH | Sector not certified |
| F43E(-3010) | RET_RF_ERR_VAL | Numeric block data format is incorrect, or the file size is large in DES Fire card operation tiny error |
| F43D(-3011) | RET_RF_ERR_CARD_EXIST | The card is still in the sensing area inside |
| F43C(-3012) | RET_RF_ERR_STATUS | Card status error (such as a/b card call m1 card interface) |
| F43B(-3013) | RET_RF_ERR_OVERFLOW |  |
| F43A(-3014) | RET_RF_ERR_FAILED | DES Fire card should answer data error |
| F439(-3015) | RET_RF_ERR_COLLERR | |
| F438(-3016) | RET_RF_ERR_FIFO | Application buffer empty in DES Fire card operation Lack of |
| F437(-3017) | RET_RF_ERR_CRC |  |
| F436(-3018) | RET_RF_ERR_FRAMING |  |
| F435(-3019) | RET_RF_ERR_PARITY |  |
| F434(-3020) | RET_RF_ERR_DES_VAL | DES Fire card response Data DES operation result is inconsistent |
| F433(-3021) | RET_RF_ERR_NOT_ALLOWED | The operation is not allowed. For example, when the currently selected file is not a record file, the read record cannot be executed. |
| F3E4(-3100) | RET_RF_ERR_CHIP_ABNORMAL | Operating interface chip does not exist Or abnormal |
| F37F(-3201) | RET_RF_DET_ERR_INVALID_PARAM |  |
| F37E(-3202) | RET_RF_DET_ERR_NO_POWER |  |
| F37D(-3203) | RET_RF_DET_ERR_NO_CARD |  |
| F37C(-3204) | RET_RF_DET_ERR_MULTIPLE_CARDS |  |
| F37B(-3205) | RET_RF_DET_ERR_ACT |  |
| F37A(-3206) | RET_RF_DET_ERR_PROTOCOL |  |
| F31B(-3301) | RET_RF_CMD_ERR_INVALID_PARAM |  |
| F31A(-3302) | RET_RF_CMD_ERR_NO_POWER |  |
| F319(-3303) | RET_RF_CMD_ERR_NO_CARD |  |
| F318(-3304) | RET_RF_CMD_ERR_TX |  |
| F317(-3305) | RET_RF_CMD_ERR_PROTOCOL |  |
| FF38(-200) | PHILIPS_MIFARE_ERR_NACK |  |
| FF37(-201) | PHILIPS_MIFARE_ERR_COMM |  |
| FF36(-202) | PHILIPS_MIFARE_ERR_AUTHEN |  |
| FF35(-203) | PHILIPS_MIFARE_ERR_CRC |  |
| FF34(-204) | PHILIPS_MIFARE_ERR_REJECT |  |



#### MSR Error Code

| Error code | Error name | Comment |
| --- | --- | --- |
| 0xFFFF(-1) |  | Open, close the magnetic stripe card failed |
| 0xFD41(-703) | ERR_MSR_READERR | Read the card, but read the card wrong |
| 0xFD42(-702) | ERR_MSR_OPENERR |  |
| 0xFD43(-701) | ERR_MSR_NOSWIPED |  |



#### Keypad Error Code

| Error code | Error name | Comment                     |
| ---------- | ---------- | --------------------------- |
| FFFF(-1)   |            | Time out                    |
| FFFD(-3)   |            | User cancel input (ESC key) |
| FFFC(-4) |  | IC card is removed |
| FFFB(-5) | ERR_PIN_LEN | Password length mode setting is not required to be greater than 4 Less than 12 digits |
| FFFA(-6) | KEY_ERRPAD | Keyboard (TP) module error |
| FC0B(-1013) | KB_USER_ENTER_Exit | User cancel input (command mode) |
| FC09(-1015) | KB_USER_SLEEP | User actively goes to sleep |
| FC03(-1021) | TP_TAG_ERR | Did not receive 0x73 this TLV |
| FC02(-1022) | TP_TLV_ERR | The number of button coordinates received is incorrect. |
| FC01(-1023) | TP_EXG_SIZE_ERR | The coordinates received are incorrect, upper left and lower right Coordinates are not logical |
| FC00(-1024) | TP_CMDEXG_TO_ERR | Coordinate exchange command wait timeout |



#### RTC Error Code

| Error code | Error name | Comment |
| --- | --- | --- |
| FC7C(-900) | TIME_FORMAT_ERR | Time format error |
| FC7B(-901) | TIME_YEAR_ERR | Year error |
| FC7A(-902) | TIME_MONTH_ERR | Month error |
| FC79(-903) | TIME_DAY_ERR | Day error |
| FC78(-904) | TIME_HOUR_ERR | Hour error |
| FC77(-905) | TIME_MINUTE_ERR | Minute error |
| FC76(-906) | TIME_SECOND_ERR | Second error |
| FC75(-907) | TIME_WEEK_ERR | Weekly error |
| FC74(-908) | TIME_SET_ERR | Setup failed |
| FC73(-909) | TIME_GET_ERR | Acquisition failed |
| FC72(-910) | TIME_RAMADDR_OVER | Time content address is exceeded |
| FC71(-911) | TIME_RAMLEN_OVER | Length of time exceeded |



#### HSM Error Code

| Error code | Error name | Comment |
| --- | --- | --- |
| FED3(-301) | PED_RET_ERR_NO_KEY | The key does not exist |
| FED2(-302) | PED_RET_ERR_KEYIDX_ERR | Key index error, parameter index not in range |
| FED1(-303) | PED_RET_ERR_DERIVE_ERR | Source key class when the key is written The type error or level is lower than the destination key |
| FED0(-304) | PED_RET_ERR_CHECK_KEY_FAIL | Key verification failed |
| FECF(-305) | PED_RET_ERR_NO_PIN_INPUT | Did not enter the pin |
| FECE(-306) | PED_RET_ERR_INPUT_CANCEL | User cancels input pin |
| FECD(-307) | PED_RET_ERR_WAIT_INTERVAL | Function call is less than minimum interval time |
| FECC(-308) | PED_RET_ERR_CHECK_MODE_ERR | KCV mode is wrong, not supported |
| FECB(-309) | PED_RET_ERR_NO_RIGHT_USE | Not authorized to use this key, PED current key tag value and want to make The key tag values used are not equal |
| FECA(-310) | PED_RET_ERR_KEY_TYPE_ERR | Key type error |
| FEC9(-311) | PED_RET_ERR_EXPLEN_ERR | Expected pin length string wrong |
| FEC8(-312) | PED_RET_ERR_DSTKEY_IDX_ERR | The destination key index is wrong, not Within the scope |
| FEC7(-313) | PED_RET_ERR_SRCKEY_IDX_ERR | The source key index is incorrect, not in scope or when the key is written, the value of the source key type is greater than the destination Key type, will return the key |
| FEC6(-314) | PED_RET_ERR_KEY_LEN_ERR | Key length error |
| FEC5(-315) | PED_RET_ERR_INPUT_TIMEOUT | Input pin timeout |
| FEC4(-316) | PED_RET_ERR_NO_ICC | ICC card does not exist |
| FEC3(-317) | PED_RET_ERR_ICC_NO_INIT | ICC card is not initialized |
| FEC2(-318) | PED_RET_ERR_GROUP_IDX_ERR | DUKPT group index number error |
| FEC1(-319) | PED_RET_ERR_PARAM_PTR_NULL | The pointer parameter is illegally empty |
| FEC0(-320) | PED_RET_ERR_TAMPERED | PED has been attacked |
| FEBF(-321) | PED_RET_ERROR | PED generic error |
| FEBE(-322) | PED_RET_ERR_NOMORE_BUF | No free buffer |
| FEBD(-323) | PED_RET_ERR_NEED_ADMIN | Need to get advanced permissions |
| FEBC(-324) | PED_RET_ERR_DUKPT_OVERFLOW | DUKPT has overflowed |
| FEBB(-325) | PED_RET_ERR_KCV_CHECK_FAIL | KCV checksum failed |
| FEBA(-326) | PED_RET_ERR_SRCKEY_TYPE_ERR | Source key id when writing the key Key type and source key type do not match |
| FEB9(-327) | PED_RET_ERR_UNSPT_CMD | Command not supported |
| FEB8(-328) | PED_RET_ERR_COMM_ERR | Communication error |
| FEB7(-329) | PED_RET_ERR_NO_UAPUK | No user authentication public key |
| FEB6(-330) | PED_RET_ERR_ADMIN_ERR | Failed to take system sensitive service |
| FEB5(-331) | PED_RET_ERR_DOWNLOAD_INACTIVE | PED is inactive download state |
| FEB4(-332) | PED_RET_ERR_KCV_ODD_CHECK_FAIL | KCV odd parity failed |
| FEB3(-333) | PED_RET_ERR_PED_DATA_RW_FAIL | Failed to read PED data |
| FEB2(-334) | PED_RET_ERR_ICC_CMD_ERR | ICC card operation error (offline Text, Cipher text password verification) |
| FEB1(-335) | PED_RET_ERR_KEY_VALUE_INVALID | The key written is all zero or equal, there are equal components, and the 16/24 byte key has two components equal. |
| FEB0(-336) | PED_RET_ERR_KEY_VALUE_EXIST | Already have the same key value |
| FEAF(-337) | PED_RET_ERR_UART_PARAM_INVALID | Serial port parameters are not supported |
| FEAE(-338) | PED_RET_ERR_KEY_INDEX_NOT_SELE CT_OR_NOT_MATCH | The key index is not selected or is not related to the selected key index. Wait |
| FEAD(-339) | PED_RET_ERR_INPUT_CLEAR | User presses clear key to exit Input pin |
| FEAC(-340) | PED_RET_ERR_LOAD_TRK_FAIL |  |
| FEAB(-341) | PED_RET_ERR_TRK_VERIFY_FAIL |  |
| FEAA(-342) | PED_RET_ERR_MSR_STATUS_INVALID |  |
| FEA9(-343) | PED_RET_ERR_NO_FREE_FLASH |  |
| FEA8(-344) | PED_RET_ERR_DUKPT_NEED_INC_KSN | DUKPT KSN needs to be added 1 |
| FEA7(-345) | PED_RET_ERR_KCV_MODE_ERR | KCV mode error |
| FEA6(-346) | PED_RET_ERR_DUKPT_NO_KCV | NO KCV |
| FEA5(-347) | PED_RET_ERR_PIN_BYPASS_BYFUNKEY | Press the FN/atm4 key to cancel the pin |
| FEA4(-348) | PED_RET_ERR_MAC_ERR |  |
| FEA3(-349) | PED_RET_ERR_CRC_ERR |  |
| FEA2(-350) | PED_RET_ERR_ALG_ERR |  |
| FEA1(-351) | PED_RET_ERR_STATE |  |
| FEA0(-352) | PED_RET_ERR_PWD |  |
| FE9F(-353) | PED_RET_ERR_NEWPWD |  |
| FE9E(-354) | PED_RET_ERR_PWDOVERRUN |  |
| FE9D(-355) | PED_RET_ERR_REQ_SSA |  |
| FE9C(-356) | PED_RET_ERR_UNLOCK_TIMEOUT |  |
| FE9B(-357) | PED_RET_ERR_UNLOCK_PARAM |  |
| FE9A(-358) | PED_RET_ERR_UNLOCK_NO |  |
| FE99(-359) | PED_RET_ERR_UNLOCK_CHECK |  |
| FE98(-360) | PED_RET_ERR_NEED_RESET |  |
| FE97(-361) | PED_RET_ERR_RNG |  |
| FE96(-362) | PED_RET_ERR_NEED_RMT_AUTH |  |
| FE70(-400) | PED_RET_ERR_KEY_KCV_TAB_NULL |  |
| FE6F(-401) | PED_RET_ERR_PED_CFG_RW_FAIL |  |
| FE6E(-402) | PED_RET_ERR_SEK_VERIFY_FAIL |  |
| FE6D(-403) | PED_RET_ERR_SEK_ALL_ZERO |  |
| FE6C(-404) | PED_RET_ERR_PINBLOCK_FMT |  |
| FE6B(-405) | PED_RET_ERR_PIN_LEN |  |
| FE6A(-406) | PED_RET_ERR_PAN_LEN |  |
| FE69(-407) | PED_RET_ERR_DATA_LEN |  |
| FE68(-408) | PED_RET_ERR_KEY_LEN |  |
| FE67(-409) | PED_RET_ERR_CMAC |  |
| FE66(-410) | PED_RET_ERR_READ_CFG |  |
| FE65(-411) | PED_RET_ERR_KEY_STRENGTH |  |
| FE64(-412) | PED_RET_ERR_PARAM |  |
| FE63(-413) | PED_RET_ERR_WORK_MODE |  |
| FE62(-414) | PED_RET_ERR_KEY_INDEX |  |
| FE61(-415) | PED_RET_ERR_KEYBLOCK_VER |  |
| FE60(-416) | PED_RET_ERR_FORBIDDEN |  |
| FE5F(-417) | PED_RET_ERR_INVALID_SIGN |  |
| FE5E(-418) | PED_RET_ERR_INVALID_USE |  |



#### EMV Error Code

| Error code | Error name | Comment |
| --- | --- | --- |
| 0 | EMV_OK | Handle OK |
| 1 | EMV_APPROVED | Transaction approved |
| 2 | EMV_APPROVED_ONLINE | Transaction online approved |
| 3 | EMV_DECLINED | Transaction declined |
| 4 | EMV_FORCE_APPROVED | Transaction force approved |
| 5 | EMV_DELAYED_APPROVED | Transaction delayed approved |
| 6 | APPLE_VAS_APPROVED | Apple vas approval |
| 254 | PARAMETER_ERROR | An exception occurred in the parameter |
| 255 | EXCEPTION_ERROR | An exception occurred during the execution process |
| -1 | EMV_CANCEL | Trans cancel |
| -2 | EMV_TIMEOUT | Trans Timeout |
| -3 | EMV_COMMAND_FAIL | Read the card failure |
| -4 | EMV_FALLBACK | Fallback |
| -5 | EMV_MULTI_CONTACTLESS | Read multi contactless |
| -6 | EMV_OTHER_ICC_INTERFACE | Not pure magnetic strip |
| -7 | EMV_APP_BLOCKED | Application blocked |
| -8 | EMV_CARD_BLOCKED | Card locked |
| -9 | EMV_APP_EMPTY | No application |
| -10 | EMV_NOT_ALLOWED | Not allowed |
| -11 | EMV_NOT_ACCEPTED | Not accepted |
| -12 | EMV_TERMINATED | Terminated |
| -13 | EMV_SEE_PHONE | See Phone |
| -14 | EMV_OTHER_INTERFACE | Try another interface |
| -30 | EMV_ENCRYPT_ERROR | Trade encrypt error |
| -31 | EMV_UNENCRYPTED | Trade unencrypted |
| -40 | EMV_CARD_ERROR | Abecs Fallback |
| -40 | APPLE_VAS_UNTREATED (Apple Transaction) | Apple vas untreated |
| -41 | APPLE_VAS_FAILED | Apple vas failed |
| -42 | APPLE_VAS_WAITING_INTERVENTION | Apple vas waiting intervention |
| -43 | APPLE_VAS_WAITING_ACTIVATION | Apple vas waiting activation |
| -50 | EMV_GPO_6985 | Command GPO 6985 |
| -80 | EMV_READ_RECORD_ERROR | Command Read Record error |
| -81 | EMV_DATA_ERROR | Card Data error |
| -999 | EMV_OTHER_ERROR | Other error exceptions |
