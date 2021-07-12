"use strict";
Page({
    data: {
        inputShowed: false,
        inputVal: ""
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3hzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInd4c3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVMsRUFBRTtRQUNULElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsV0FBVyxFQUFFLFVBQVUsQ0FBTTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9QYWdlIE9iamVjdFxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBpbnB1dFNob3dlZDogZmFsc2UsXHJcbiAgICBpbnB1dFZhbDogXCJcIlxyXG4gIH0sXHJcbiAgc2hvd0lucHV0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBpbnB1dFNob3dlZDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBoaWRlSW5wdXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlucHV0VmFsOiBcIlwiLFxyXG4gICAgICBpbnB1dFNob3dlZDogZmFsc2VcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2xlYXJJbnB1dDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaW5wdXRWYWw6IFwiXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgaW5wdXRUeXBpbmc6IGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlucHV0VmFsOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTsiXX0=