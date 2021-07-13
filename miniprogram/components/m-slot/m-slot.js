"use strict";
Component({
    properties: {},
    options: {},
    data: {},
    methods: {},
    externalClasses: ['test-class'],
    observers: {
        test: function () { }
    },
    pageLifetimes: {
        show: function () {
            console.log('页面显示');
        },
        hide: function () {
            console.log('页面隐藏');
        },
        resize: function () {
            console.log('页面尺寸改变');
        }
    },
    lifetimes: {
        created: function () {
            console.log('组件被创建');
        },
        attached: function () {
            console.log('组件准备就绪');
        },
        ready: function () {
            console.log('组件渲染完成');
        },
        moved: function () {
            console.log('组件移动');
        },
        detached: function () {
            console.log('组件被移除');
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibS1zbG90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibS1zbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFDUixVQUFVLEVBQUUsRUFBRTtJQUNkLE9BQU8sRUFBRSxFQUFFO0lBQ1gsSUFBSSxFQUFFLEVBQUU7SUFDUixPQUFPLEVBQUUsRUFBRTtJQUNYLGVBQWUsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUUvQixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUosY0FBYyxDQUFDO0tBQ2hCO0lBR0QsYUFBYSxFQUFFO1FBQ2IsSUFBSSxFQUFKO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSSxFQUFKO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsTUFBTSxFQUFOO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QixDQUFDO0tBQ0Y7SUFFRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQVA7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxRQUFRLEVBQVI7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFDRCxLQUFLLEVBQUw7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFDRCxLQUFLLEVBQUw7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxRQUFRLEVBQVI7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29tcG9uZW50IE9iamVjdFxyXG5Db21wb25lbnQoe1xyXG4gIHByb3BlcnRpZXM6IHt9LCAvLyDpobXpnaLkvKDpgJLnmoTmlbDmja5cclxuICBvcHRpb25zOiB7fSwgLy8g6YWN572u6YCJ6aG5XHJcbiAgZGF0YToge30sIC8vIOe7hOS7tuaVsOaNrlxyXG4gIG1ldGhvZHM6IHt9LCAvLyDnu4Tku7bmlrnms5VcclxuICBleHRlcm5hbENsYXNzZXM6IFsndGVzdC1jbGFzcyddLCAvLyDpobXpnaLkvKDpgJLnmoTmoLflvI9cclxuXHJcbiAgb2JzZXJ2ZXJzOiB7IC8vIOebkeWQrGRhdGHjgIFwcm9wZXJ0aWVz5bGe5oCnXHJcbiAgICB0ZXN0KCk6IHZvaWQge30gLy8g5Y+q5pyJ5paw55qE5YC85LiA5Liq5Y+C5pWwXHJcbiAgfSxcclxuXHJcbiAgLy8g55uR5ZCs6aG16Z2i55Sf5ZG95ZGo5pyfXHJcbiAgcGFnZUxpZmV0aW1lczoge1xyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuICAgICAgY29uc29sZS5sb2coJ+mhtemdouaYvuekuicpO1xyXG4gICAgfSxcclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpobXpnaLpmpDol48nKTtcclxuICAgIH0sXHJcbiAgICByZXNpemUoKTogdm9pZCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpobXpnaLlsLrlr7jmlLnlj5gnKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsaWZldGltZXM6IHtcclxuICAgIGNyZWF0ZWQoKTogdm9pZCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfnu4Tku7booqvliJvlu7onKTtcclxuICAgIH0sXHJcbiAgICBhdHRhY2hlZCgpOiB2b2lkIHtcclxuICAgICAgY29uc29sZS5sb2coJ+e7hOS7tuWHhuWkh+Wwsee7qicpO1xyXG4gICAgfSxcclxuICAgIHJlYWR5KCk6IHZvaWQge1xyXG4gICAgICBjb25zb2xlLmxvZygn57uE5Lu25riy5p+T5a6M5oiQJyk7XHJcbiAgICB9LFxyXG4gICAgbW92ZWQoKTogdm9pZCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfnu4Tku7bnp7vliqgnKTtcclxuICAgIH0sXHJcbiAgICBkZXRhY2hlZCgpOiB2b2lkIHtcclxuICAgICAgY29uc29sZS5sb2coJ+e7hOS7tuiiq+enu+mZpCcpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19