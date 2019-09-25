import React, { Component } from 'react'
import { Table } from 'reactstrap'

class schedule extends Component {
  render () {
    return (
      <Table id='schedule' hover>
        <thead>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Event</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>9:00A</th>
            <td>&nbsp;</td>
            <td>Opening</td>
            <td>Sponsor Exhibits</td>
          </tr>
          <tr>
            <th scope='row'>9:50A</th>
            <td>10:00A</td>
            <td>Opening Remarks</td>
            <td>
              Lem Rafinan &ndash; Founder/President
              <br /> West Texas Cybersecurity and Info Asrnc Society
            </td>
          </tr>
          <tr>
            <th scope='row'>10:00A</th>
            <td>10:15A</td>
            <td>Keynote Speaker</td>
            <td>Shawn Ollis &ndash; VP Operations Prudential Financial</td>
          </tr>
          <tr>
            <th scope='row'>10:15A</th>
            <td>10:45A</td>
            <td>Click Jacking Technical Demo</td>
            <td>Prudential Financial Development Security Team</td>
          </tr>
          <tr>
            <th scope='row'>10:45A</th>
            <td>12:00N</td>
            <td>Borderland Cyber Security Summit &ndash; Discussion</td>
            <td>
              Kira Shuman &ndash; Cybersecurity Division Chief DoD
              <br /> Jesus Antonio Flores &ndash; Director of Technology EPISD
              <br /> Ernesto Arrillo &ndash; Information Security Assurance Mgr
              &ndash; City of El Paso
            </td>
          </tr>
          <tr>
            <th scope='row'>12:00P</th>
            <td>12:30P</td>
            <td>Network Detection and Response Technology</td>
            <td>Brad Bleeck &ndash; Lastline.com</td>
          </tr>
          <tr>
            <th scope='row'>12:30P</th>
            <td>12:45P</td>
            <td>Closing Remarks</td>
            <td>
              Lem Rafinan &ndash; Founder/President
              <br /> West Texas Cybersecurity and Info Asrnc Society
            </td>
          </tr>
          <tr>
            <th scope='row'>&nbsp;</th>
            <td>2:00P</td>
            <td>Closing</td>
            <td>Sponsor Exhibits</td>
          </tr>
          <tr>
            <th scope='row'>2:00P</th>
            <td>5:00P</td>
            <td>Event Networking</td>
            <td>
              The Shack Wings and Brews
              <br /> 9120 Viscount Blvd., El Paso, TX 79925
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default schedule
