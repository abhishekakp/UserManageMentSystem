var app = angular.module('tableApp',['ngAnimate','ngSanitize','ui.bootstrap','ui.select','ngCsv']);
app.controller("tableController",  function($scope, $uibModal){
  //===========================================Pagination==================================================================================//
    $scope.data=mainData;
    $scope.displayRows=5;
    //console.log($scope.displayRows);
    //----------------------------------------------Arraay to display rows  on a page-------------------------------------------------------//
    $scope.numbers=[2,4,5,10,15,20,25,30];
    //console.log($scope.data.length);
         $scope.rows = $scope.data.length;
        $scope.curPage=1;
        $scope.maxSize=5;
     this.items=$scope.data;
    $scope.numOfPages=function(){
       return Math.ceil($scope.rows/$scope.$sdisplayRows);
    }
    $scope.changeRows=function(search){
        $scope.rows=search;
        console.log($scope.rows);
    }
    $scope.rows=$scope.data.length;
    $scope.$watch('data + mainData + curPage + numPerPage + displayRows',function(){
        $scope.rows = $scope.data.length;
    });
    $scope.$watch('curPage + numPerPage + displayRows + rows',function(){
        // console.log(mainData);
        // console.log($scope.data)
        // $scope.rows = $scope.data.length;
         $scope.begin = (($scope.curPage-1)*$scope.displayRows);
         console.log($scope.begin);   
    });
    //-----------------------------------------function for sorting----------------------------------------------------------------------------//
    $scope.sort=function(keyname){ 
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
        //console.log("running sort");   
    }
    //------------------------------------Delete Function--------------------------------------------------------------------------------------//
    $scope.removeItem=function(x){
        $scope.data.splice(x,1);
    }
    //==============================================Calling modal to add new data or edit data===================================================//
    $scope.showPopup = function(index){	
        if(index>=0){
                 console.log($scope.data[index].dob);
                 user = {'name': mainData[index].name,'email':mainData[index].email,'phoneNo':mainData[index].phone,'dob':mainData[index].dob,'address':mainData[index].address,'laguages':mainData[index].laguages,'index':index};
        }
        else{
        user = {'name': '','email':'','phoneNo':'','dob':'','address':'','laguages':'',};
        }
        $scope.modalInstance = $uibModal.open({
               ariaLabelledBy: 'modal-title',
              //  ariaDescribedBy: 'modal-body',
               templateUrl: 'view.html',
               controller :'modalHandlerController',
               controllerAs: '$ctrl',
               size: 'lg',
               resolve: {
                    user: function(){
                          return user;
                       }
                  }
             });
             
      }
      //========================================Delete Confirmation Madal=======================================================================//
      $scope.confirmationDialogConfig = {};
      $scope.confirmationDialog = function(index) {
        user = {'del': index};
        $scope.modalInstance = $uibModal.open({
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'confirmDialog.html',
          controller :'confirmController',
          controllerAs: '$ctrl',
          size: 'sm',
          resolve: {
            user: function(){
              return user;
           }
             }
        });
      };
      $scope.showDialog = function(flag) {
        jQuery("#confirmation-dialog .modal").modal(flag ? 'show' : 'hide');
      };
});
app.controller("confirmController",function($scope,$uibModalInstance){
  $scope.cancelModal = function(){
    console.log("cancelmodal");
    $uibModalInstance.dismiss('close');
  }
    $scope.index= user.del;
    $scope.deleteConfirm= function(){
      console.log("deleted");
    mainData.splice($scope.index,1);
    $uibModalInstance.dismiss('deleted');
    
    
    
}
});
///========================================Array==============================================================================================///
var mainData=[
    {
        name:'Chetan',
        email:'chetan@gmail.com',
        phone:123000000,
        gender:'male',
        age:'20',
        dob:'31/12/2017',
        laguages: ['Java'],
        address:'Delhi',
    },
    // {
    //     name:'Chirag',
    //     email:'ca@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'22',
    //     dob:'05/09/2004',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Ayush',
    //     email:'ac@gmail.com',
    //     phone:816999170,
    //     gender:'female',
    //     age:'29',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Sandeep',
    //     email:'ss@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'30',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Abhinav',
    //     email:'ab@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'40',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Chandresh',
    //     email:'ckghkhkhkhkkhlrkhlrggljgrkjghkjjhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkp@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'19',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Vishal',
    //     email:'vk@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'24',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Akshat',
    //     email:'as@gmail.com',
    //     phone:816999170,
    //     gender:'female',
    //     age:'29',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Aman',
    //     email:'ag@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'30',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Shresth',
    //     email:'sk@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'40',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Abhishek',
    //     email:'akp@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'20',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Chirag',
    //     email:'ca@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'22',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Ayush',
    //     email:'ac@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'29',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Sandeep',
    //     email:'ss@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'30',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Abhinav',
    //     email:'ab@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'40',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Chandresh',
    //     email:'ckp@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'19',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Vishal',
    //     email:'vk@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'24',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Akshat',
    //     email:'as@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'29',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Aman',
    //     email:'ag@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'30',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    // {
    //     name:'Shresth',
    //     email:'sk@gmail.com',
    //     phone:816999170,
    //     gender:'male',
    //     age:'40',
    //     dob:'28-03-2002',
    //     laguages:'C,Java,Python',
    //     address:'',
    // },
    
];







//-----------------------------------------------------------MODAL 1 CONTROLLER-------------------------------------------------------------------//
app.controller("modalHandlerController",function($scope,$uibModalInstance){
  $scope.availableColors = ['C','C++','Java','Python','Dart'];

  $scope.multipleDemo = {};
  $scope.multipleDemo.colors = [];
  // $scope.multipleDemo.colors = ['Blue','Red'];
  $scope.mData=mainData;
  $uibModalInstance.close('save');
  //setting array data to modal
  $scope.name = user.name;
  $scope.email = user.email
  $scope.phoneNo=user.phoneNo;
  // $scope.dt = new Date(year, month, day);
 
  
  
  $scope.dob=user.dob;
  
    console.log($scope.dob);
  $scope.multipleDemo.colors=user.laguages;
  $scope.address  = user.address;
  // $scope.language = user.laguages;
  $scope.index = user.index;
 
  if(user.gender==='male')
  {
    $scope.male=!$scope.male
  }
  else
  {
    $scope.female=!$scope.female;
  }
  
  
     $scope.addData = function(){
        $uibModalInstance.close('save');
 ////=====================================Checking Editing or adding new data==================================================================//////       
  if($scope.index)
  {
    $scope.fname = $scope.name;
        $scope.femail = $scope.email
        $scope.fphoneNo=$scope.phoneNo;
        $scope.fdob=$scope.dob;
        $scope.faddress  = $scope.address;
        $scope.flanguages = $scope.multipleDemo.colors;
    mainData[$scope.index]={name:$scope.fname,
      email:$scope.femail,
      phone:$scope.fphoneNo,
      gender:$scope.mgender,
      age:$scope.age,
      dob:$scope.fdob,
      address:$scope.faddress,
      laguages:$scope.flanguages,}
      console.log(mainData);
  }
  ////=====================================Checking Editing or adding new data==================================================================//////
        else{
        $scope.fname = $scope.name;
        $scope.femail = $scope.email
        $scope.fphoneNo=$scope.phoneNo;
        console.log($scope.dob);
        $scope.fdob=$scope.dob;
        console.log($scope.fdob);
        
        $scope.faddress  = $scope.address;
        $scope.flanguages = $scope.multipleDemo.colors;
        console.log($scope.multipleDemo.colors);
        console.log($scope.flanguages);
        if($scope.male)
        $scope.mgender='male'
        else
        $scope.mgender='female'
        var now=new Date();
       
        var nowMonth = now.getUTCMonth() ; 
        var nowDay   = now.getUTCDate();
        var nowYear  = now.getUTCFullYear();
        console.log(nowMonth)
        
        
        var myMonth_birth=$scope.fdob.getUTCMonth();
        var myDay_birth = $scope.fdob.getUTCDate();
        var myYear_birth = $scope.fdob.getUTCFullYear();
        console.log(myMonth_birth);
        
        var birthAge = nowYear - myYear_birth -1;//not ur age yet
        if( nowMonth>=myMonth_birth){ //means ur birth month is now or passed
            if(nowDay >=myDay_birth)//check if the day is now or passed
             birthAge += 1 ;
        }
        $scope.age= birthAge;
        console.log(birthAge);
        console.log("saved");
        // console.log($scope.test);
        mainData.push({name:$scope.fname,
        email:$scope.femail,
        phone:$scope.fphoneNo,
        gender:$scope.mgender,
        age:$scope.age,
        dob:$scope.fdob,
        address:$scope.faddress,
        laguages:$scope.flanguages,
      });
        
        console.log(mainData);

     }
    }
    $scope.languages=['C','C++','Java','Python'];
     $scope.cancelModal = function(){
         console.log("cancelmodal");
         $uibModalInstance.dismiss('close');
     }
     $scope.ok = function(){
     $uibModalInstance.close('save');
     
     }
     
     //-----------------------------------------------------------------------Date Picker-----------------------------------------------------------
     
    
     $scope.today = function() {
      $scope.dob = '02/01/2017';
    };
    $scope.dob = '31/12/2017';
    $scope.clear = function() {
      $scope.dob = null;
    };
  
    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };
  
    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };
  
    $scope.popup1 = {
      opened: false
    };
})
.directive('dateFormatter', [
  function () {
      return {
          restrict: 'A',
          require: 'ngModel',
          link: function postLink(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(data) {
              console.log("parsers.push " + data);
              var out = moment(data).format('DD/MM/YYYY');
              console.log("$parsers.out = " + out);
              return out;
            });
              
            ngModel.$formatters.push(function(data) {
              console.log("$formatters.push " + data);
              var out = moment(data, 'DD/MM/YYYY').toDate()
              console.log("$formatters.out =" + out);
              return out;
            });
          }
      };
  }
]);