  // JG.repeat(5, 10, {
  //   id: JG.objectId(),
  //   email() {
  //     return (
  //       _.snakeCase(this.profile.name) +
  //       '@' +
  //       this.profile.company +
  //       JG.domainZone()
  //     ).toLowerCase();
  //   },
  //   facebook() {
  //     return (_.words(this.profile.name)[0] + moment(this.profile.dob).format('YY')).toLowerCase();
  //   },
  //   twitter() {
  //     return (_.words(this.profile.name)[0] + moment(this.profile.dob).format('YY')).toLowerCase();
  //   },
  //   instagram() {
  //     return (_.words(this.profile.name)[0] + moment(this.profile.dob).format('YY')).toLowerCase();
  //   },
  //   userCode: `${JG.company/JG.floating(90, 90, 6)}`,
  //   profile: {
  //     name: `${JG.firstName()} ${JG.lastName()}`,
  //     company: JG.company(),
  //     phone: JG.floating(),
  //     gender: JG.random('male', 'female'),
  //     levelOfEducation: JG.random('Educated', 'Degree', 'SSCE', 'PHD', 'Masters'),
  //     employmentStatus: JG.random('Employed', 'Unemployed'),
  //     marritalStatus: JG.random('', 'single', 'married'),
  //     bvn: {long: JG.floating(-180, 180, 6)},
  //     children: JG.floating(6),
  //     officeMail() {
  //     return (
  //       _.snakeCase(this.name) +
  //       '@' +
  //       this.company +
  //       JG.domainZone()
  //     ).toLowerCase();
  //   },
  //     sectorOfEmployment: JG.random('trader', 'banker', 'fintech', 'teacher', 'professor', 'sport'),
  //     monthlyIncome: JG.currency(),
  //     loanRepayment: JG.currency(),
  //     dateJoined: moment(JG.date(new Date(1988, 0, 1), new Date(1995, 0, 1))).format('YYYY-MM-DD'),
  //     durationOfEmployment: JG.floating(-90)+ JG.random('month', 'year'),
  //     address: `${JG.integer(1, 100)} ${JG.street()}, ${JG.city()}, ${JG.state()}`,
  //     typeOfResidence: JG.repeat(1, JG.random('owner', 'Tenant', 'guest')),
  //     location: {
  //       lat: JG.floating(-90, 90, 6),
  //       long: JG.floating(-180, 180, 6),
  //     },
  //     gurantor: JG.repeat(2, 10,{
  //        name: `${JG.firstName()} ${JG.lastName()}`,
  //        relationship: JG.random('friend', 'sister', 'brother', 'co-worker'),
  //        email() {
  //     return (
  //       _.snakeCase(this.name) +
  //       '@' +
  //       this.company +
  //       JG.domainZone()
  //     ).toLowerCase();
  //   },
  //     }),
  //     about: JG.loremIpsum({ units: 'sentences', count: 2 }),
  //   },
  //   apiKey: JG.guid(),
  //   roles: _.uniq(JG.repeat(2, JG.random('owner', 'admin', 'member', 'guest'))),
  //   createdAt: JG.date(new Date(2010, 0, 1), new Date(2015, 0, 1)),
  //   updatedAt() {
  //     return moment(this.createdAt).add(1, 'days');
  //   },
  // });
  