 /*
         /*
      TODO 表单验证的需求
      TODO * 表单元素获取焦点时 - 显示输入提示内容
      TODO * 表单元素失去焦点时 - 完成表单元素的验证
      TODO   * 验证失败 - 给出失败的信息
      TODO   * 验证成功 - 给出成功的信息
      TODO * class的说明
      TODO   * 隐藏和显示的class
      TODO     * .show - 显示
      TODO     * .hide - 隐藏
      TODO   * 表示不同含义的class
      TODO     * .control-default - 提示信息
      TODO     * .control-error - 错误信息
      TODO     * .control-success - 成功信息
     */
    
    var uname = document.getElementById("uname");
    var unameTip = document.getElementById("unameTip");
    //TODO 绑定获取焦点事件
    uname.onfocus = function(){
        //TODO 显示提示信息
        unameTip.className = "col-md-5 show control-default";
        unameTip.innerHTML = "请输入8至16位的英文或数字.";
    };
    //TODO 绑定失去焦点事件
    uname.onblur = function(){
        if(uname.validity.valid){
            //TODO 表示输入正确
            unameTip.className = "col-md-5 show control-success";
            unameTip.innerHTML = "用户名输入正确";
        }else if(uname.validity.valueMissing){
            //TODO 表示值为空
            unameTip.className = "col-md-5 show control-error";
            unameTip.innerHTML = "用户名不能为空";
        }else if(uname.validity.patternMismatch){
            //TODO 表示正则不匹配
            unameTip.className = "col-md-5 show control-error";
            unameTip.innerHTML = "用户名输入不正确";
        }
    };
   
    var upwd = document.getElementById("upwd");
    var upwdTip = document.getElementById("upwdTip");
    //TODO 绑定获取焦点事件
    upwd.onfocus = function(){
        //TODO 显示提示信息
        upwdTip.className = "col-md-5 show control-default";
        upwdTip.innerHTML = "请输入6至12位的数字.";
    }
    //TODO 绑定失去焦点事件
    upwd.onblur = function(){
        if(upwd.validity.valid){
            //TODO 表示输入正确
            upwdTip.className = "col-md-5 show control-success";
            upwdTip.innerHTML = "用户密码输入正确";
        }else if(upwd.validity.valueMissing){
            //TODO 表示值为空
            upwdTip.className = "col-md-5 show control-error";
            upwdTip.innerHTML = "用户密码不能为空";
        }else if(upwd.validity.patternMismatch){
            //TODO 表示正则不匹配
            upwdTip.className = "col-md-5 show control-error";
            upwdTip.innerHTML = "用户密码输入不正确";
        }
    }

    /****************注册请求*************************************/
    $('#register').click(function(){
      //获取用户的数据
        var uname = $('#uname').val();
        var upwd =$('#upwd').val();
         if(uname==''){
           $("#uname").html('请输入用户名');
           return false;
         } 
         if(upwd==''){
           $("#upwd").html('请输入用户密码');
           return false;
         }
         $.post('data/register.php',{'uname':uname,'upwd':upwd},function(data){
            if(data.code==1000){
                location.href="shop.html";
            }else if(data.code==1002){
               alert("注册失败");
               return false;
            }
         }) 
      })
  

    /********************关闭注册框**************************************/
   $('#clse').click(function(){
     $('.tab').hide();
   })