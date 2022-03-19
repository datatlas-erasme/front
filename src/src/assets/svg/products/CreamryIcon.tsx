import * as React from "react";

export const CreamryIcon = ({
    height = "auto",
    width = "20",
  ...props} : React.SVGProps<SVGSVGElement>) => (
<svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M0.00477695 21.4982H21.4081V0.0949279H0.00477695V21.4982Z" fill="url(#pattern0)"/>
    <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_839_4055" transform="scale(0.015625)"/>
        </pattern>
    <image id="image0_839_4055" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAQCklEQVR42uVbS48bWRW+t152+dHvpBOSDEoCyQRmeGxmGAFiwxIJCQm2/Ao2s2HNni0bYMOwQUi8NqMMIDHMZEZimEeSnvQjnXYnnW633X67qu7hO/dW2VW2O+kk/ZKwUrHLrrbv+e453/nOvaeE+D9/yMP+wj//6Y8zUsgzjuuWLNsu2rY9jfM5RbRASs1IyyoIEnkSIi+IHCmlxaMgogivQxxdnHZwfcd1nKrt2Ds431VK1SzL6pCgJn7m8RtvfKd24gC89+9/2bu7O1/s9/sXCsXSy47tftN13Suul5t28MCAXRjk4VJ+dvBr+D1J+E/hXOF9PsiMRKPA45HEZ8QfEK4TEU4DAMRHFAaBCsKgjmtXHNf5EN9zO4qiB1Ol8v1rL9+IjgWATz7+ZL6+V/uuiqIfYqa/ViqWcrbj+GwkJrSHoQeYMZr0GBhsnvUh9SgkGRyGQ8JraVu2kBb8Bg/2FnyDje/OE6kcAwjj251Ou4O/+g/O/1AqT/3z+vXrO0cGwM2bN3+EGX/z/PnzF32/wINvwq4eBhUaoxUmB9ZgNo29+rWxmj/QcxsbL2G8MHMdDyUBIwFAwG4NBD+zhyj2Ej43SNkaI8vKI9SKe3t7VqVSWZ+env45jps3btzYe5o9zrMY/+677/7g7t07v3v99W9Fft7fCKOwFwRBPLHCNs/GIGncPbEtsYti42QWCMkIkRxeqR9stJl4bbP5TykZI2TxM0BXuKQLrujNzy/kEIKv3rp167cY1y/x+ZuHCoDneV+yLNtptduNXC4ngLoFFyQ+zOxJDYaZHGmsj6Pe+ICUsYtTgs9I/FMqBGQMgAFDavSSc5kKE4vDxHVcEYWRgne2MayyZXmLB7HpmQC4cOHi3cePt8L333tvFnEm5+fnm0C869h2nwyhCe3uxiMyz3Lg4pKM7ZlYFyluSDAhThADDxhewH+vYlfRfxgp5dV2d/ObDx+WlpaWyi9durh75crVzUMHIJ/PrYRhtFMsFhaR0vzl5Xv5fN4PZmdnWoVCoacJQMgICSCAd0QYvEq8Ihm/jnlLZ4KB16QIUaQtHYaAjnj2NjsMQxfu7eH3HUXKarfbuXq9Xuz1ei7IWPq+z1TTzPv5nUMHAI+HGNAWyG9xZnY2iCIV2Y4l2q12Hjk7x5kvDAPZ73Uj+G8A7wjxXgSWUsKkPdIcoYQiY7wy/BhngKFDmHSIuVaRstnQoB84bGQAAJSKXAYSnBv1g0AWi8UQhocLCwvWTnWHM1LD83Lbhw4AmHX37bffXt7e3n4VM8HBR14uH2EkESxSyP8K4AgMUvaDvkDOtqIwRIToPCbjqZSJTydhMZL+Em9gwCCOLJ1P8XsMWOB5bijIg1BSIECSSMP8zTbAsXq9vt1oNMXi4rl1uObaUXiAANprGAzHtbaDyUlpDlNMhgrnrOiUbTmRsAXPMI+Tg4NFDVxaGLUTzzpnAGkyJCUxrkMG/6AkpeN40qhFuJFSrAEc4G1LZTkcYUqZLwK0LApkt9vlMS6BsFePCoAdNjwBANNL+E85jovYtwO4XwgbOTXBfVm4KEeTvgl3ftvS3GaSmpXKfIlQUibdswokZcuItP6x4QkWT7oVQkHD6VhvEINhwXCc2wSFyCEoSqXSZwBg80gAANltJwDkPJeQf5n0QsQ7ea7tuo5kUZJDds7BURCv2km03Xgf82gLc1giTu2pbyeTLpV2GxwR48CKWNk2h4SEwhS9MFR9uBo+sPAJbJbC9vA19fqezX8HPljGbwVHFgI85n6/Z+dzOfgi2TlX+DlP+nnQoJfzYahrApki48psrJ5yK532RowfPTeyQGhFqSwNDZEHUIphv4ff73PIhf1AdYIo4AJKQRIz37Qw+1sHteeZAYB7fQ5332k1m/Pzs6VCIZ/zi6WyzOV94Xg+xm2n1H7Is5hE9pg+GDB/Wv/H50kqEFoOO7G3xFfki9oDCdmg3++6zUa91Gp32s3GngOBtgNvrB0ZAPiBDTD9erfbmj+zMFfwC1PCcT2j+MB6scDnJAWfJZGm9uQFJfo4oXytHjMzn1aIw3fjkkHrYIsZ1RVFNweXL1nlTrP0348/E36+8BjapHpQe6xnBQDx3kQYLLM7F0vTxvjYMMPyYDhD2omQ2eeQJiwsmTCiOfhcDvkheS3izwa8Ef8eH/BIUSiWNbf4RX8Vgu3oPMDwgH8b5YCwHU8wGyd63QzUEumKDlw1dPmkKsy4xaA+SsvguIKSmZDQQMXv63TBjNjvC9TDYm+vIarVurh85crSM03o8wAAF1vudnuaqRPjTQ0QxeeDKodz+UTCy1QDcuT90Uvx3RCdgvUHCh6BKlTw7zebbW08pDGOUL+GWLt95AB4rlsFCzMTC2huYTIVCSwICIfj2YgSAZZmgaTZ30r8dQIYyXqBEUBIf8wfkdJ/z3mdDez3ceAZtQjeV/pZ6TCwuCrV1+E3w6mpqc+PHADX86ohVEen03GhCyDxIiPvdAoHAKiOMRaWwvpZy0DMIJK2dltzRPpZv6c/J3MdGTAZC32dkQUmI5oFBeNZMdfwG1wOQwYz8FXw0/1nscV6HgBgdAVP21iByeT0TBbXXGCOpHKlQaioGBSlXVsNDjUw3iwI2Hp2HdsB3/BrSxs7/M44K8DjoEsYlF0+jhwAxFnFy3nrtVpNZGhNJu5sXFnEXp8Q1/AwwFgDxk8fKbaf8Ns09sKAz5yAxy54onkcALSgBVYgPXWsJow9YDNKjy9O3EmNK2WW9GSa+ScYmrqYnrCE2W61sGKV27l48WLvyAHgR7lcXmq1W5qZs3KeMkovMSEOlNg7Bpem/2zMekr/T6PTnuQRqWuGVqspQIArz2rHcwOAgmOt0+nqTDC21p2AQMPRDkJjJN/TU9anad8TkawycgqUHALT01O3jw0A6O1d1N4R19+Z8Q+kbnr2Rqc3NauUPNPTEZDjiHB67fdYk0QBVoTuHqMH5Ktw/x7W5IbMTUMCGOT2p34TTX5N2SI5Q7QDIWUIkycBnrALSbx+bAAUi6VNpKhqo9kcCJhMKNDA+SfaO/QKOab6aL/9m9QPyNR/2gsBAJbLqscGADLBRj6X39ir143iSxmbqfxo/xieFBITmZ6etJdFAoKMQ6EOid48NgDOnDnT8AuFtT0sQmIRlNK1jRh4RIoD4g8pAwqNTfQwS1IGybR3pVcPeDeu0+1AnbrVq1evto8NABMGhc+ZA0BClE5amdiX6cUuOT6DKb6UmY0VOUKlSTZJcQBvHSMFduEBSIHLz2PDCwFQKpVvQ++HHIOTXV2m3pf7xwElKjJ9KWVJfx82xZoY8RI8OOn2sQMwMzOziqqsAS8wO8AjzD1YAkv7xoj4ITFifIYZaB93kQMd0ev3LN6dRvzfPXYAUHjUUcC0sFmqiTBhvbTaE2lBRBMTW0rl0RNnO7tuOMgA3EOwPTs7u3rsAGD3pY483MbWGIW69o8dl8YDPMFhKBdIHMjafbOIcRuOfxRmG+CjyrEDgFS4A0m81Ww1JbiA0o6bhATRAa2jg/8uxe7PuyfdXhdb487DGze+0jh2AObm5pooilba6FDB2pxSA0VIk7L8E1ycBjI3lTGfHAI6BSqFPUEuo6vPHcbiBR/l8tQSa/F+r6/07vhgkTNRezTkvhQ4KbmwT+U4ChGN1c5YbSIGoFAsPj4xAJB/74AAEYodGSka4z2RKZJS3kCUWQcgEhNrhyFmciwrcHsOL5IiHd89QQ8o38E2+Q6YkDcp01u8mUXPA/HahFWf7Ip51jfgdbzk3MAS3Z0TAwCZoGLbzha0AHYpI8q2yIzK3gnTPBb0lLmMJrF/rBmRAi2U5RVs1907MQAwADQl2RBDWJ8PBx1jw9yeAUOO698xL5AT/CL7d/oKMA62A0WpXF5eXDy7eWIAoChqwQtqXJAgJhWl8julVojSFcFk15fiCSwwFgJojCKEAK9Qr6AjhE4MgLgmWOUlKc4EcePCWNYjGt0oJTGeLOVE8hytL5IMAI/j/cBHL6RmDwMAXosLgj4XRZRogYlzPSoH90mD2TfkxAuwMaN4Qbbg+zsnDsDC/MIdGNPQNYGK0ss+IwXSpALnKYseNHnFlBUg0O7Nzs2tnzgAhWJhHTs3u1ibR1dYRBn2TyvDFK2PqcPx9fB9XYOZlosg3qJDRbpy4gDkcvk6tq8azVZLpokw6+2UtIeN0xxlcdrXQRIFCKKB8rJAgJtQopUTBwAFEToz/UYH6wKozzURjktAKSaumj5B/mYdIGk9lkyAXAPYEGH3Z2amT54DWAtMT03voiCyet2eUkSZNf8xJz9ABZxZLBHD9hj2JPYy3jIH8PdfdOyHAgA/QEabvErHHRtaEqduBJFjy5pjqwXm89TKkEw1VCe953r7XWkANA+gX6n2ouN2DguAXM57YOnta/SEYEtbxr0Cg50imqD7KM3yqfsmUiSaeQYK+H5uzuSOUb6yeWo8AGtyq48ePRL37t1zdnaqgsHgzm0Ao/f3B7vHGY2wDyhi0FJg+gNcV38Pb4PV6zWxsrrqbFQqfP/C9qnxABi7Dq+sra2tOXBR98zZM+7szLTFAy8WfLSveVi5QfHmcCNtNOgSSTpEiIarSLpLFC8CbDew3m+1uM6IeAOE6rVa/9Gjh21uSCuVph6eGgBQD2yiX78BPeB/+dq1bb6zpNHYK6yvV/LwWrtcKtmeB1+wLd0nLZPkGFePFButlSQzPRIJ2l4ibL2hx0ZE8/Nz3XNnF1oLc9NBY6/mOy5xm3zlNAHwaH5hfg8zdAmLJH3cVNVFK30b7fJxF1dgYzvd7XY7Dh9oekIcR9z0Ly1zcxQ6qW1CRlHwmhDtMDBcMdtF2PNDGDjcGus83trOQ2stoghbLRT8R6cGAIiS2t/++pftZrMhtra2zmLfMMBNFX3MUh/1Ojcuh6xheCFnggSU4wU/d0EHLjS/j+4wvlnCa+w1vEar40F4WbhLBTdvyNPDAfzABsFWZaPCpOdsVioOqkR/emaa+4sJQBB4QoG4uLWeMMO6DV43UseGk74LLJKYaVaUVrfTlbzi3Gw0ZQ3kx01ZDPDmZkVceumlT/D94akC4KuvvPKrm++88/2tx1uzFy5cEOAEZmp934/rehI9hRZCRaDLnFvtdHbgbBG332ti5Na6LhY6ebsN90OCB7q6J7Af9ABwSzxYf8DdY9Vr167/5jDGfOj3Dn9w64Nvv/X7t35RrVZfnyqXnXPnz/EmKvcYI4c7ur+P2924g9RK+n5jAJI+wkglTZLgDwgrNnwXHWlYdWJ++MePf/yTn7322mvvn0oA+PHZp586DzY2vre2tvpTLJR8A7n8Auh/Lu/xzLs6rzupmyaM0EkMV8ZweALPPjLBLsB5gD2IDy9fufxreM3fYXx4WGM9EgDSj6Wlu3xL26Vms/V1NFS9glR3GSnvC7B7BpHBNxi48TiYHDs46jiw0GovI3w+wi0oHxULxXWk1tZRjO9/0lcDEkQzXwMAAAAASUVORK5CYII="/>
</defs>
</svg>

  )

