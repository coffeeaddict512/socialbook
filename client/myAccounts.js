Template.myAccounts.helpers({
    theProfiles(){
        return profilesdb.find();
    }
});

Template.myAccounts.events({
    'click .js-delete'(event){
         let myID = this._id;
        $("#confirmID").val(myID);
        $('#confirmModal').modal('show');
        
    },
    'click .js-comfirmDel'(events){
        let delID = $("#confirmID").val();
        $('#confirmModal').modal('hide');
        //let myDoc = event.target.parentNode.parentNode.parentNode;
        $("#"+delID).fadeOut( "slow", function() {
            // Delete document permanantly
            profilesdb.remove({_id: delID});
          });
        //console.table(this._id);
        //console.log("deleting", myID);
        //console.log("Deleting document", delID );
    },
    'click .js-edit'(events){
        let myID = this._id;
        let imgPath = this.pPic;
        let fname = this.pfirst;
        let lname = this.pLast;
        let age = this.pAge;
        let gender = this.pGen;
        document.getElementById("editImg").src = imgPath;
        $('#editPic').val(imgPath);
        $('#editfirstName').val(fname);
        $('#editlastName').val(lname);
        $('#editage').val(age);
        $('#editModal').modal('show');
    }
});