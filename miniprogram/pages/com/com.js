"use strict";
Page({
    data: {
        imgPath: ''
    },
    onLoad: function () {
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    handleUserInfo: function (e) {
        console.log(e);
    },
    handleChooseAblum: function () {
        var _this = this;
        wx.chooseImage({
            success: function (_a) {
                var tempFilePaths = _a.tempFilePaths;
                console.log(tempFilePaths);
                _this.setData({
                    imgPath: tempFilePaths[0]
                });
            }
        });
    },
    handleLoad: function (e) {
        console.log(e);
    },
    handleFocus: function (_a) {
        var detail = _a.detail;
        console.log(detail);
    },
    handleBlur: function (_a) {
        var detail = _a.detail;
        console.log(detail);
    },
    handleInput: function (_a) {
        var detail = _a.detail;
        console.log(detail);
    },
    hadnleScroll: function (_a) {
        var detail = _a.detail;
        console.log(detail);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUNELE9BQU8sRUFBRTtJQUVULENBQUM7SUFDRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBQ0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFHRCxjQUFjLEVBQWQsVUFBZSxDQUFNO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUdELGlCQUFpQixFQUFqQjtRQUFBLGlCQVNDO1FBUkMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLE9BQU8sRUFBRSxVQUFDLEVBQWlCO29CQUFmLGFBQWEsbUJBQUE7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7aUJBQzFCLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsVUFBVSxFQUFWLFVBQVcsQ0FBTTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakIsQ0FBQztJQUdELFdBQVcsRUFBWCxVQUFZLEVBQWU7WUFBYixNQUFNLFlBQUE7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVSxFQUFWLFVBQVcsRUFBZTtZQUFiLE1BQU0sWUFBQTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxFQUFlO1lBQWIsTUFBTSxZQUFBO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUdELFlBQVksRUFBWixVQUFhLEVBQWE7WUFBWixNQUFNLFlBQUE7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBR0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9QYWdlIE9iamVjdFxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBpbWdQYXRoOiAnJ1xyXG4gIH0sXHJcbiAgLy9vcHRpb25zKE9iamVjdClcclxuICBvbkxvYWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICB9LFxyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICB9LFxyXG4gIG9uU2hvdzogZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gIH0sXHJcbiAgb25IaWRlOiBmdW5jdGlvbigpe1xyXG5cclxuICB9LFxyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbigpe1xyXG5cclxuICB9LFxyXG5cclxuICAvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuICBoYW5kbGVVc2VySW5mbyhlOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH0sXHJcblxyXG4gIC8vIOeUqOaIt+mAieaLqeeFp+eJh1xyXG4gIGhhbmRsZUNob29zZUFibHVtKCk6IHZvaWQge1xyXG4gICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICBzdWNjZXNzOiAoeyB0ZW1wRmlsZVBhdGhzIH0pOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaW1nUGF0aDogdGVtcEZpbGVQYXRoc1swXVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy8g5Zu+54mH5Yqg6L295a6M5oiQ5Zue6LCD5Ye95pWwXHJcbiAgaGFuZGxlTG9hZChlOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICB9LFxyXG5cclxuICAvLyBpbnB1dOiBmueEplxyXG4gIGhhbmRsZUZvY3VzKHsgZGV0YWlsIH06IGFueSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coZGV0YWlsKTtcclxuICB9LFxyXG4gIC8vIOWkseWOu+eEpueCuVxyXG4gIGhhbmRsZUJsdXIoeyBkZXRhaWwgfTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhkZXRhaWwpO1xyXG4gIH0sXHJcbiAgLy8g55So5oi36L6T5YWlXHJcbiAgaGFuZGxlSW5wdXQoeyBkZXRhaWwgfTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhkZXRhaWwpO1xyXG4gIH0sXHJcblxyXG4gIC8vIOa7muWKqFxyXG4gIGhhZG5sZVNjcm9sbCh7ZGV0YWlsfTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhkZXRhaWwpO1xyXG4gIH0sXHJcblxyXG5cclxufSk7Il19