'use strict';

angular.module('bitCrowdFundsApp')
  .factory('Project', function Proj() 
  {
    function Project(name, dateCreat, dateEnd, description, amount)
      {
        this.name = name;
        this.dateCreat = dateCreat;
        this.description = description;
        this.dateEndCampaign = dateEnd;
        this.amountToRaise = amount;
      }
      return Project;
  })
  .factory('ProjectRes', function ($resource)
  {
    return $resource('api/projects/:name', {},
    {
      query:
      {
        method:'GET',
        isArray:true
      },
      featured:
      {
        method:'GET',
        params:{type:'featured'},
        isArray:true
      },
      update:
      {
        method:'PUT',
        isArray:false
      }
    });
  });
