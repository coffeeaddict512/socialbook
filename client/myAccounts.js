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
          //});
        //console.table(this._id);
        //console.log("deleting", myID);
    //console.log("Deleting document", delID );
    }
});